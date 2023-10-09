import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logOut } from '../../utilities/users-service';


export default function RBSNavBar({user, setUser}) {
    const handleLogout = () => {
		logOut();
		setUser(null);
	};

    return (
        <>
        {user ? (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <img src="https://i.imgur.com/OZTTASE.png" width="50" height="50"/>
                    <Navbar.Brand href="/">FinCadamy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Your Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/users/${user._id}`}>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/" onClick={handleLogout}>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        ) : (
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <img src="https://i.imgur.com/OZTTASE.png" width="50" height="50"/>
                <Navbar.Brand href="/">FinCadamy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/courses">Courses</Nav.Link>
                    <Nav.Link href="signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Log In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            )
        }
    </>
    );
}
