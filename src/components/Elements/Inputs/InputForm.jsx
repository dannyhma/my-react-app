import PropTypes from "prop-types";
import Group from "./Group";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
	const { label, name, type, placeholder, margin = "mb-3" } = props;
	return (
		<>
			<div className={`${margin}`}>
				<Group>
					<Label htmlFor={name}>{label}</Label>
					<Input name={name} type={type} placeholder={placeholder} />
				</Group>
			</div>
		</>
	);
};

InputForm.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	margin: PropTypes.string,
};

export default InputForm;
