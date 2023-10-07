import { Button } from "react-bootstrap";

// import debug from "debug";
import { useNavigate } from "react-router-dom";

// const log = debug("findcademy:pages:OrderHistoryPage");

export default function TempLandingPage() {
	const navigate = useNavigate();

	// const handleCheckToken = async () => {
	// 	const expDate = await checkToken();
	// 	log(expDate);
	// };

	return (
		<>
			<h1>Landing Page</h1>
			{/* <Button onClick={handleCheckToken}>Verify Login</Button> */}
			<Button onClick={() => navigate("/login")}>Login Placeholder</Button>
			<Button onClick={() => navigate("/signup")}>Signup Placeholder</Button>
		</>
	);
}
