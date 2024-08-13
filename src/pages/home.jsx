import Button from "../components/Elements/Buttons/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="mb-4 text-5xl font-bold">This is homepage</h1>
				<div className="flex flex-row items-center justify-end gap-x-4">
					<Button variant="bg-blue-500 w-full">
						<Link to="/login">Login</Link>
					</Button>
					<Button variant="bg-blue-500 w-full">
						<Link to="/register">Register</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default HomePage;
