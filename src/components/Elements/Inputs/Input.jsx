import PropTypes from "prop-types";

const Input = (props) => {
	const { name, type, placeholder } = props;
	return (
		<>
			<input
				className="w-full appearance-none rounded-md py-2 pl-4 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
				name={name}
				type={type}
				placeholder={placeholder}
				id={name}
			/>
		</>
	);
};

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
