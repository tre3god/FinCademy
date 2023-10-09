import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logOut } from "../../utilities/users-service";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ user, setUser }) {
	const handleLogout = () => {
		logOut();
		setUser(null);
	};

	const navigate = useNavigate();

	return (
		<>
			{user ? (
				<Navbar expand="lg" className="bg-body-tertiary">
					<Container>
						<div className="logo" onClick={() => navigate(`/`)}>
							<img src="https://i.imgur.com/OZTTASE.png" width="50" height="50" style={{ marginRight: "20px"}} />
							<Navbar.Brand>FinCademy</Navbar.Brand>
						</div>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<NavDropdown title="Your Account" id="basic-nav-dropdown">
									<NavDropdown.Item onClick={() => navigate(`/users/${user._id}`)}>Profile</NavDropdown.Item>
								<NavDropdown.Divider />
										<NavDropdown.Item onClick={() => {
											navigate("/");
											handleLogout();
										}}>
											Sign Out
										</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link onClick={() => navigate("/courses")}>Courses</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			) : (
				<Navbar expand="lg" className="bg-body-tertiary">
					<Container>
						<div className="logo" onClick={() => navigate(`/`)}>
							<img src="https://i.imgur.com/OZTTASE.png" width="50" height="50" style={{ marginRight: "20px"}} />
							<Navbar.Brand>FinCademy</Navbar.Brand>
						</div>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link onClick={() => navigate("/courses")}>Courses</Nav.Link>
								<Nav.Link onClick={() => navigate("/signup")}>Sign Up</Nav.Link>
								<Nav.Link onClick={() => navigate("/login")}>Log In</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			)}
		</>
	);
}
