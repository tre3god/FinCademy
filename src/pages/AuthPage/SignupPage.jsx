
import { useState } from "react";
import { signUp } from "../../utilities/users-service";



export default function SignupPage({setUser}) {
    const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirm: "",
		error: "",
	});

	const handleChange = (evt) => {
        setFormData({
            ...formData,
			[evt.target.name]: evt.target.value,
			error: "",
		});
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const user = await signUp(formData);
			setUser(user);
		} catch (error) {
			setFormData({ error: "Sign up Failed - Try again" });
		}
	};

	const disable = formData.password !== formData.confirm;
    return (
        <>
        <h1>Get started with a free account!</h1>
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <label>Confirm</label>
                    <input
                        type="password"
                        name="confirm"
                        value={formData.confirm}
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <button type="submit" disabled={disable}>
                        SIGN UP
                    </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
        </>
    );
}
