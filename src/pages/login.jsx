import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<>
			<AuthLayout title="Login">
				<FormLogin />
				<p className="mt-2 text-center text-base">
					Don&apos;t have an account? {""}
					<Link to="/register" className="font-bold text-blue-700">
						Register
					</Link>
				</p>
			</AuthLayout>
		</>
	);
};

export default LoginPage;
