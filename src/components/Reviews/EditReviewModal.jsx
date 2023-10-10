import { Button, Modal } from "react-bootstrap";

export default function EditReviewModal({ show, onHide }) {
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>???</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Finish
				</Button>
				{/* Add a button to save the edited review */}
			</Modal.Footer>
		</Modal>
	);
}
