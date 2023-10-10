
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import * as userService from "../../utilities/users-service";

export default function StudentProfile() {
    const [studentId, setStudentId] = useState(null)
    const { userId } = useParams();
    // console.log("from params" + userId)

	useEffect(() => {
		const fetchStudentDetails = async () => {
			try {
				const data = await userService.findStudentCourses(userId);
				setStudentId(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStudentDetails();
	}, [userId]);
    console.log(studentId)

    const handleUnsub = async (event) => {
      const courseId = event.currentTarget.getAttribute("course");
      console.log("click unsub " + courseId);

      try {
        const data = await userService.delCourse(userId, courseId);
        console.log("Unsubscribe response:", data); // Add this line

        setStudentId(data);
      } catch (error) {
        console.log(error);
      }
    };
    

    if (!studentId) {
        return (
          <Container className="mt-5">
            <Row>
              <Col>
                <Spinner animation="border" role="status">
                  <span className="sr-only"></span>
                </Spinner>
                <div>Loading...</div>

              </Col>
            </Row>
          </Container>
        );
      }
    
      return (
        <Container className="mt-5">
          <h1>Student Profile Page</h1>
          <h2>Email: {studentId.student ? studentId.student.email : "N/A"}</h2>
          <h3>Below are your enrolled courses</h3>
          {studentId.student.courses.map((course, index) => (
            <div key={index} className="mb-2">
             <Row>
                <Col sm={1}>{index + 1}.</Col>
                <Col sm={6}>
                  <Link to={`/courses/${course}`}>{course}</Link>
                </Col>
                <Col sm={3}>
                  <Link to={`/courses/${course}/review`}>
                    <Button variant="primary">Review</Button>
                  </Link>
                </Col>
                <Col sm={2}>
                  <Button variant="danger" onClick={handleUnsub} course={course}>Unsubscribe</Button>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      );
    }
