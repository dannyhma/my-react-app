import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
	const { children, title, type } = props;
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<div className="w-full max-w-xs">
					<h1 className="mb-4 text-center text-3xl font-bold text-slate-900">
						{title}
					</h1>
					<p className="mb-6 text-center text-base font-medium text-slate-600">
						Welcome, Please enter your details.
					</p>
					{children}
					<Navigation type={type} />
				</div>
			</div>
		</>
	);
};

const Navigation = ({ type }) => {
	if (type === "login") {
		return (
			<p className="mt-2 text-center text-base">
				Don&apos;t have an account? {""}
				{type === "login" && (
					<Link to="/register" className="font-bold text-blue-700">
						Register
					</Link>
				)}
			</p>
		);
	} else {
		return (
			<p className="mt-2 text-center text-base">
				Already have an account? {""}
				{type === "register" && (
					<Link to="/login" className="font-bold text-blue-700">
						Login
					</Link>
				)}
			</p>
		);
	}
};

AuthLayout.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	type: PropTypes.string,
};

Navigation.propTypes = {
	type: PropTypes.string,
};

export default AuthLayout;
