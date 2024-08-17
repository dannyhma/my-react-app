import { useState } from "react";
import Button from "../components/Elements/Buttons/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
	{
		id: 1,
		name: "Sepatu",
		price: 1000000,
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.`,
	},
	{
		id: 2,
		name: "Sepatu Baru",
		price: 2000000,
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo`,
	},
	{
		id: 3,
		name: "Sepatu Lama",
		price: 3000000,
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.`,
	},
	{
		id: 4,
		name: "Sepatu Adidas",
		price: 3000000,
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.`,
	},
];

const email = localStorage.getItem("email");

const ProductPage = () => {
	const [cart, setCart] = useState([]);

	const handleLogout = () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		window.location.href = "/login";
	};

	const handleAddToCart = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(
				cart.map((item) =>
					item.id === id
						? {
								...item,
								qty: item.qty + 1,
							}
						: item,
				),
			);
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};

	return (
		<>
			<div className="flex h-20 items-center justify-end bg-gray-800 px-10 text-white">
				{email}
				<Button variant="bg-blue-500 ml-5" onClick={handleLogout}>
					Logout
				</Button>
			</div>
			<div className={"flex justify-center py-5"}>
				<div className="flex w-3/4 flex-wrap">
					{products.map((product) => (
						<CardProduct key={product.id}>
							<CardProduct.Image image={product.image} />
							<CardProduct.Body name={product.name}>
								{product.description}
							</CardProduct.Body>
							<CardProduct.Price
								price={product.price}
								id={product.id}
								handleAddToCart={handleAddToCart}
							/>
						</CardProduct>
					))}
				</div>
				<div className="w-1/4">
					<h1 className="mb-2 ml-5 text-3xl font-bold text-blue-700">Cart</h1>
					<table className="table-auto border-separate border-spacing-x-5 text-left">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => {
								const product = products.find(
									(product) => product.id === item.id,
								);
								return (
									<tr key={item.id}>
										<td>{product.name}</td>
										<td>
											{product.price.toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											})}
										</td>
										<td>{item.qty}</td>
										<td>
											{(item.qty * product.price).toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											})}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
