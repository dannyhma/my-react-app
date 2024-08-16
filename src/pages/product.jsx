import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
	return (
		<>
			<div className={"flex items-center justify-center py-5"}>
				<CardProduct>
					<CardProduct.Image image="/images/shoes-1.jpg" />
					<CardProduct.Body title="Sepatu Baru">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						deleniti repellendus, esse quasi culpa dicta atque minus aperiam
						exercitationem illo.
					</CardProduct.Body>
					<CardProduct.Price price="Rp. 2.000.000" />
				</CardProduct>
			</div>
		</>
	);
};

export default ProductPage;
