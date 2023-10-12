import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import { Col, Row, Container, Spinner, Pagination } from "react-bootstrap";
import debug from "debug";
import { averageRating } from "../../helper/coursesHelper";

const log = debug("fincademy:AllCoursesPage");

export default function AllCoursesPage() {
	const [allCourses, setAllCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const pageSize = 8;

	useEffect(() => {
		async function fetchCourses() {
			try {
				const res = await fetch(
					`/api/courses?page=${page}&pageSize=${pageSize}`,
				);
				const data = await res.json();
				log(data);
				const ratedCourses = averageRating(data.allCourses);
				log(ratedCourses);
				setAllCourses(ratedCourses);
				setTotalPages(Math.ceil(data.totalCount / pageSize));
				setLoading(false);
			} catch (error) {
				log("Error fetching courses", error);
				setLoading(false);
			}
		}
		fetchCourses();
	}, [page, pageSize]);

	const handlePageChange = (newPage) => {
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
			<Container
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "100vh" }}>
				<Row className="justify-content-md-center">
					{allCourses.map((course, index) => {
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
				{Array.from({ length: totalPages }).map((_, index) => (
					<Pagination.Item
						key={index + 1}
						active={index + 1 === page}
						onClick={() => handlePageChange(index + 1)}>
						{index + 1}
					</Pagination.Item>
				))}
				<Pagination.Next
					onClick={() => handlePageChange(page + 1)}
					disabled={page === totalPages}
				/>
			</Pagination>
		</>
	);
}
