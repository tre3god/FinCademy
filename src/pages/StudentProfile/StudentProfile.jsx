import { useParams } from "react-router-dom"


export default function StudentProfile() {
    const {userId} = useParams()
    return(
        <>
        <h1>Student Profile Page</h1>
        <h2>Student ID: {userId}</h2>
        <h3>Below are your enrolled courses</h3>
        <ul>
            <li>Finance 101 <button>Unsubscribe</button></li>
            <li>Money printahhhh <button>Unsubscribe</button></li>

        </ul>
        </>
    )
}