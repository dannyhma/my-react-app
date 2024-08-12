import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Inputs/InputForm";

const FormLogin = () => {
	return (
		<>
			<form action="">
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
					<Button variant="bg-blue-500 w-full">Login</Button>
				</div>
			</form>
		</>
	);
};

export default FormLogin;
