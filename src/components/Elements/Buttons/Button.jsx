import PropTypes from "prop-types";

const Button = (props) => {
	const {
		variant = "bg-black",
		children = "Button",
		onClick = () => {},
		type = "button",
	} = props;
	return (
		<>
			<button
				className={`${variant} h-10 rounded-md px-6 font-semibold text-white`}
				type={type}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};

Button.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
