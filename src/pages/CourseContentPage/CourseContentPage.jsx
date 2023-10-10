import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button } from "react-bootstrap";
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
    <>
      <br />
      <h1>{course.courseTitle}</h1>
      <br />
      <ReactMarkdown> {parsedContent}</ReactMarkdown>
      <br />
      <Link to={`/quiz/${courseId}`}>
        <Button className="col-md-5 mx-auto">Take the quiz now!</Button>
      </Link>
    </>
  );
}
