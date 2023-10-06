import { useState } from "react"
import { login } from "../../utilities/users-service";

export default function LoginPage({setUser}) {
    const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (evt) => {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError("");
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const user = await login(credentials);
			setUser(user);
		} catch (error) {
			setError("Log In Failed - Try Again");
		}
	};

    return (
        <>
        <h1>Log in here</h1>
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
					<button type="submit">LOG IN</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{error}</p>
		</div>
        </>
	);
}
