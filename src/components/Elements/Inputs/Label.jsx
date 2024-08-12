import PropTypes from "prop-types";

const Label = (props) => {
	const { htmlFor, children } = props;
	return (
		<>
			<label
				htmlFor={htmlFor}
				className="mb-1 block text-sm font-bold text-slate-600"
			>
				{children}
			</label>
		</>
	);
};

Label.propTypes = {
	htmlFor: PropTypes.string,
	children: PropTypes.string,
};

export default Label;
