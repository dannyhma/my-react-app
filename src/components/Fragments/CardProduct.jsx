import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../Elements/Buttons/Button";

const CardProduct = (props) => {
	const { children } = props;
	return (
		<>
			<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-gray-800 shadow">
				{children}
			</div>
		</>
	);
};

CardProduct.propTypes = {
	children: PropTypes.element,
};

const Image = (props) => {
	const { image } = props;
	return (
		<>
			<Link to="">
				<img src={image} alt="product" className="rounded-t-lg p-8" />
			</Link>
		</>
	);
};

Image.propTypes = {
	image: PropTypes.node,
};

const Body = (props) => {
	const { title, children } = props;
	return (
		<>
			<div className="px-5 pb-6">
				<Link to="">
					<h5 className="text-xl font-semibold tracking-tight text-white">
						{title}
					</h5>
					<p className="text-m text- text-white">{children}</p>
				</Link>
			</div>
		</>
	);
};

Body.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string,
};

const Price = (props) => {
	const { price } = props;
	return (
		<>
			<div className="flex items-center justify-between px-5 pb-5">
				<span className="text-xl font-bold text-white">{price}</span>
				<Button variant="bg-blue-500">Add To Card</Button>
			</div>
		</>
	);
};

Price.propTypes = {
	price: PropTypes.string,
};

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Price = Price;

export default CardProduct;
