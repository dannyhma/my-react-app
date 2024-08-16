import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Inputs/InputForm";

const FormLogin = () => {
	const handleLogin = (event) => {
		event.preventDefault();
		localStorage.setItem("email", event.target.email.value);
		localStorage.setItem("password", event.target.password.value);
		window.location.href = "/products";
	};
	return (
		<>
			<form onSubmit={handleLogin}>
				<InputForm
					label="Email"
					htmlFor="email"
					name="email"
					type="email"
					placeholder="example@gmail.com"
				/>
				<InputForm
					label="Password"
					name="password"
					type="password"
					placeholder="********"
					margin="mb-9"
				/>
				<div className="mb-6"></div>
				<div className="flex flex-row items-center justify-end gap-x-4">
					<Button variant="bg-blue-500 w-full" type="submit">
						Login
					</Button>
				</div>
			</form>
		</>
	);
};

export default FormLogin;
