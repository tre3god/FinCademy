import { useParams } from "react-router-dom"


export default function StudentProfile() {
    const {userId} = useParams()
    return(
        <>
        <h1>Student Profile Page</h1>
        <h2>Student ID: {userId}</h2>
        </>
    )
}