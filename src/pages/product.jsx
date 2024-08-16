import CardProduct from "../components/Fragments/CardProduct";

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
const ProductPage = () => {
	return (
		<>
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
		</>
	);
};

export default ProductPage;
