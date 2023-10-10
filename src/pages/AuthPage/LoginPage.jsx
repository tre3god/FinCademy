import { useState } from "react";
import { login } from "../../utilities/users-service";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";


export default function LoginPage({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (evt) => {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError("");
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const user = await login(credentials);
			// console.log(user)

			setUser(user);
			// navigate to user/:userId page (Student Profile)
			navigate("/profile");
		} catch (error) {
			setError("Log In Failed - Try Again");
		}
	};

	return (
    <Container className="login-page">
      <h1>Log in to your account</h1>
      <Row>
        <Col md={6}>
          <div className="form-container">
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={credentials.email}
                  placeholder="Enter a valid email address"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <p className="error-message">&nbsp;{error}</p>
              <Button type="submit">LOG IN</Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="register-link">
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}