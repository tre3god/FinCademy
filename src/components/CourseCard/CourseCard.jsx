import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CourseCard({ course }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{course.courseTitle}</Card.Title>
                <Card.Text>
                    {course.shortDescription}
                </Card.Text>
                <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    );
}