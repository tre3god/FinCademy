import { ListGroup } from "react-bootstrap";
import { Rating } from "@mui/material";
import moment from "moment";
// import debug from "debug";
// const log = debug("fincademy:components:ReviewsHistory");

export default function ReviewsHistory({ review }) {
	const isUpdated = review.createdAt !== review.updatedAt;
	const createdAt = moment(review.createdAt).fromNow();
	const updatedAt = moment(review.updatedAt).fromNow();
	return (
		<ListGroup>
			<ListGroup.Item>{review.user.name}</ListGroup.Item>
			<ListGroup.Item className="d-flex">
				<Rating name="rating" value={review.rating} readOnly />
				<span className="ms-3">
					{isUpdated ? `Edited: ${updatedAt}` : `Created: ${createdAt}`}
				</span>
			</ListGroup.Item>
			<ListGroup.Item>{review.comments}</ListGroup.Item>
		</ListGroup>
	);
}
