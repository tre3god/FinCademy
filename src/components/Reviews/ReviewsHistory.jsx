import { ListGroup } from "react-bootstrap";
import { Rating } from "@mui/material";
// import debug from "debug";
// const log = debug("fincademy:components:ReviewsHistory");

export default function ReviewsHistory({ review }) {
	return (
		<ListGroup>
			<ListGroup.Item>{review.user.name}</ListGroup.Item>
			<ListGroup.Item>{review.comments}</ListGroup.Item>
			<ListGroup.Item>
				<Rating name="rating" value={review.rating} readOnly />
			</ListGroup.Item>
		</ListGroup>
	);
}
