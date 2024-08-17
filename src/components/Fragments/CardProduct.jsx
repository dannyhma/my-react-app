import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../Elements/Buttons/Button";

const CardProduct = (props) => {
	const { children } = props;
	return (
		<>
			<div className="m-2 flex w-full max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-gray-800 shadow">
				{children}
			</div>
		</>
	);
};

CardProduct.propTypes = {
	children: PropTypes.node,
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
	image: PropTypes.string,
};

const Body = (props) => {
	const { name, children } = props;
	return (
		<>
			<div className="h-full px-5 pb-6">
				<Link to="">
					<h5 className="text-xl font-semibold tracking-tight text-white">
						{name}
					</h5>
					<p className="text-m text- text-white">{children}</p>
				</Link>
			</div>
		</>
	);
};

Body.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string,
};

const Price = (props) => {
	const { price, handleAddToCart, id } = props;
	return (
		<>
			<div className="flex items-center justify-between px-5 pb-5">
				<span className="text-xl font-bold text-white">
					{price.toLocaleString("id-ID", {
						style: "currency",
						currency: "IDR",
						minimumFractionDigits: 0,
						maximumFractionDigits: 0,
					})}
				</span>
				<Button variant="bg-blue-500" onClick={() => handleAddToCart(id)}>
					Add To Card
				</Button>
			</div>
		</>
	);
};

Price.propTypes = {
	price: PropTypes.number,
	handleAddToCart: PropTypes.func,
	id: PropTypes.number,
};

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Price = Price;

export default CardProduct;
