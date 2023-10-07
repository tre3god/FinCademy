import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CourseCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Course Title</Card.Title>
                <Card.Text>
                    Input short course description here to give users a brief understanding of the course
                </Card.Text>
                <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    );
}