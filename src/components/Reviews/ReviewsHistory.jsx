import { ListGroup } from "react-bootstrap";
import debug from "debug";
import { Rating } from "@mui/material";
const log = debug("fincademy:components:ReviewsHistory");

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
