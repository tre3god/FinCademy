import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userApi from "../../utilities/users-api";

export default function StudentProfile() {
	const [studentId, setStudentId] = useState();
	const userId = useParams();

	useEffect(() => {
		const fetchStudentDetails = async () => {
			try {
				const data = await userApi.getOne(userId);
				setStudentId(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStudentDetails();
	}, []);

	return (
		<>
			<h1>Student Profile Page</h1>
			<h3>Below are your enrolled courses</h3>
			<ul>
				<li>
					Finance 101 <button>Unsubscribe</button>
				</li>
				<li>
					Money printahhhh <button>Unsubscribe</button>
				</li>
			</ul>
		</>
	);
}
