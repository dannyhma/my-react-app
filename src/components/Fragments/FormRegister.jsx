import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Inputs/InputForm";

const FormRegister = () => {
	return (
		<>
			<form action="">
				<InputForm
					label="Fullname"
					name="fullname"
					type="text"
					placeholder="Inser your name here..."
				/>
				<InputForm
					label="Email"
					name="email"
					type="email"
					placeholder="example@gmail.com"
				/>
				<InputForm
					label="Password"
					name="password"
					type="password"
					placeholder="********"
				/>
				<InputForm
					label="Confirm Password"
					name="confirmPassword"
					type="password"
					placeholder="********"
					margin="mb-9"
				/>
				<div className="mb-6"></div>
				<div className="flex flex-row items-center justify-end gap-x-4">
					<Button variant="bg-blue-500 w-full">Register</Button>
				</div>
			</form>
		</>
	);
};

export default FormRegister;
