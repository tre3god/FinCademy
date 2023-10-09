import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button } from "react-bootstrap";
import debug from "debug";

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

  return (
    <>
      <br />
      <h1>{course.courseTitle}</h1>
      <br />
      <div className="p-2">{course.content}</div>
      <br />
      <Link to={`/quiz/${courseId}`}>
        <Button className="col-md-5 mx-auto">Take the quiz now!</Button>
      </Link>
    </>
  );
}
