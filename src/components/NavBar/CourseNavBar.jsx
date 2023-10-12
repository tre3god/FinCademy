import { Navbar, Nav, Form, Container } from "react-bootstrap";

export default function CourseNavBar({
	handlePageSizeChange,
	handleSortChange,
}) {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Form.Select
							onChange={(e) => handlePageSizeChange(e.target.value)}
							defaultValue="8">
							<option value="4">4 per page</option>
							<option value="8">8 per page</option>
							<option value="12">12 per page</option>
						</Form.Select>
					</Nav>
					<Nav>
						<Form.Select onChange={(e) => handleSortChange(e.target.value)}>
							<option value="default">Default</option>
							<option value="rating">Rating</option>
							<option value="az">A-Z</option>
							<option value="za">Z-A</option>
						</Form.Select>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
