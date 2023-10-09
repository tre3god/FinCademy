import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as userService from "../../utilities/users-service";

export default function StudentProfile() {
    const [studentId, setStudentId] = useState(null)
    const { userId } = useParams();
    console.log("from params" + userId)

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

    if (!studentId) {
        return <h1>Loading...</h1>;
      }

    return(
        <>
        <h1>Student Profile Page</h1>
        <h2>Email: {studentId.student ? studentId.student.email : "N/A"}</h2>
        <h2>Test Courses: {studentId.student ? studentId.student.courses: "N/A"} </h2>
        <h3>Below are your enrolled courses</h3>
        
        {studentId.student.courses.map((course, index) => (
            <>
            <div key={index}>
                <div>{course}</div>
            </div>
            </>
        ))}
        </>
    )
}
