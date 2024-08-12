import PropTypes from "prop-types";

const AuthLayout = (props) => {
	const { children, title } = props;
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
				</div>
			</div>
		</>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
};

export default AuthLayout;
