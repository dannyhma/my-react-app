import PropTypes from "prop-types";

const Button = (props) => {
	const { variant = "bg-black", children = "Button" } = props;
	return (
		<>
			<button
				className={`${variant} h-10 rounded-md px-6 font-semibold text-white`}
				type="submit"
			>
				{children}
			</button>
		</>
	);
};

Button.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.string,
};

export default Button;
