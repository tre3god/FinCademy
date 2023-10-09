import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as courseService from "../../utilities/course-service";

export default function CourseContentPage() {
  const [content, setContent] = useState([]);
  const courseId = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await courseService.getContent(courseId);
        setContent(data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, []);

  return (
    <>
      {content.map((content) => (
        <>
        
          <div key={content._id}>
            <p>{content.content}</p>
          </div>
          <br />
          <br />
          <div>
            <p>{content.quiz}</p>
          </div>
        </>
      ))}
    </>
  );
}
