import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Container, Row, Col } from "react-bootstrap";
import debug from "debug";
import ReactMarkdown from "react-markdown";

const log = debug("fincademy:CourseContentPage:CourseContentPage");

export default function CourseContentPage() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await courseService.getCourseContent(courseId);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, [courseId]);

  const parsedContent = course.content ? course.content.replace(/\\n/g,"\n") : "";

  return (
    <Container className="mt-4" style={{ maxWidth: "63%" }}>
      <Row>
        <Col>
          <h1>{course.courseTitle}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ReactMarkdown>{parsedContent}</ReactMarkdown>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center d-flex justify-content-center">  {/* Added d-flex and justify-content-center */}
          <Link to={`/quiz/${courseId}`}>
            <Button>Take the quiz now!</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
