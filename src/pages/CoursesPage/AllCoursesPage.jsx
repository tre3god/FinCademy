import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import { Col, Row, Container, Spinner, Pagination } from "react-bootstrap";
import debug from "debug";
import { useLocation, useNavigate } from "react-router-dom";
import { getCourses } from "../../utilities/course-service";
import CourseNavBar from "../../components/NavBar/CourseNavBar";

const log = debug("fincademy:AllCoursesPage");

export default function AllCoursesPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const [allCourses, setAllCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchCourses() {
			try {
				const queryParams = new URLSearchParams(location.search);
				const data = await getCourses(queryParams);
				log(data);
				setAllCourses(data);
				setLoading(false);
			} catch (error) {
				log("Error fetching courses", error);
				setLoading(false);
			}
		}
		fetchCourses();
	}, [page, location]);

	const handlePageSizeChange = (value) => {
		const queryParams = new URLSearchParams(location.search);
		queryParams.set("pageSize", value);
		navigate(`?${queryParams.toString()}`);
	};

	const handleSortChange = (sortOption) => {
		const queryParams = new URLSearchParams(location.search);
		queryParams.set("sortBy", sortOption);
		navigate(`?${queryParams.toString()}`);
	};

	const handlePageChange = (newPage) => {
		const queryParams = new URLSearchParams(location.search);
		queryParams.set("page", newPage);

		navigate(`?${queryParams.toString()}`);

		setPage(newPage);
	};

	if (loading) {
		return (
			<Container className="d-flex justify-content-center vh-100">
				<Spinner animation="border" variant="success" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}

	return (
		<>
			<CourseNavBar
				handlePageSizeChange={handlePageSizeChange}
				handleSortChange={handleSortChange}
			/>
			<Container
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "100vh" }}>
				<Row className="justify-content-md-center">
					{allCourses.ratedCourses?.map((course, index) => {
						return (
							<Col key={index} xs={12} sm={6} md={4} lg={3}>
								<CourseCard course={course} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<Pagination className="justify-content-center mt-3">
				<Pagination.Prev
					onClick={() => handlePageChange(page - 1)}
					disabled={page === 1}
				/>
				{Array.from({ length: allCourses.totalPages || 1 }).map((_, index) => (
					<Pagination.Item
						key={index + 1}
						active={index + 1 === page}
						onClick={() => handlePageChange(index + 1)}>
						{index + 1}
					</Pagination.Item>
				))}
				<Pagination.Next
					onClick={() => handlePageChange(page + 1)}
					disabled={page === allCourses.totalPages}
				/>
			</Pagination>
		</>
	);
}
