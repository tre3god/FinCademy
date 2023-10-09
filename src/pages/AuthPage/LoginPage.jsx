import { useState } from "react";
import { login } from "../../utilities/users-service";
import { Link, useNavigate } from "react-router-dom";

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
			navigate(`/users/${user._id}`);
		} catch (error) {
			setError("Log In Failed - Try Again");
		}
	};

	return (
		<>
			<h1>Log in to your account</h1>
			<div>
				<div className="form-container">
					<form autoComplete="off" onSubmit={handleSubmit}>
						<label>Email</label>
						<input
							type="text"
							name="email"
							value={credentials.email}
							placeholder="Enter a valid email address"
							onChange={handleChange}
							required
						/>
						<br></br>
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={credentials.password}
							placeholder="Enter password"
							onChange={handleChange}
							required
						/>
						<br></br>
						<p className="error-message">&nbsp;{error}</p>

						<button type="submit">LOG IN</button>
					</form>
				</div>
			</div>
			<div>
				Dont have an account? <Link to="/signup">Register</Link>
			</div>
		</>
	);
}
