import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	return (
		<>
			<AuthLayout title="Register">
				<FormRegister />
				<p className="mt-2 text-center text-base">
					Have an account? {""}
					<Link to="/login" className="font-bold text-blue-700">
						Login
					</Link>
				</p>
			</AuthLayout>
		</>
	);
};

export default RegisterPage;
