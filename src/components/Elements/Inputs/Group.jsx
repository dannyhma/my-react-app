import PropTypes from "prop-types";
const Group = (props) => {
	const { children } = props;
	return (
		<>
			<div className="group relative">{children}</div>
		</>
	);
};

Group.propTypes = {
	children: PropTypes.node,
};

export default Group;
