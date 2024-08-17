import Button from "../components/Elements/Buttons/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
	{
		id: 1,
		title: "Sepatu",
		price: "Rp. 1.000.000",
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.`,
	},
	{
		id: 2,
		title: "Sepatu Baru",
		price: "Rp. 2.000.000",
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo`,
	},
	{
		id: 3,
		title: "Sepatu Lama",
		price: "Rp. 3.000.000",
		image: "/images/shoes-1.jpg",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.`,
	},
];

const email = localStorage.getItem("email");

const ProductPage = () => {
	const handleLogout = () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		window.location.href = "/login";
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
				{products.map((product) => (
					<CardProduct key={product.id}>
						<CardProduct.Image image={product.image} />
						<CardProduct.Body title={product.title}>
							{product.description}
						</CardProduct.Body>
						<CardProduct.Price price={product.price} />
					</CardProduct>
				))}
			</div>
			<div className="w-100 flex justify-center">
				<Counter />
			</div>
		</>
	);
};

export default ProductPage;
