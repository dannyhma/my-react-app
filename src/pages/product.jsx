import { Link } from "react-router-dom";
import Button from "../components/Elements/Buttons/Button";

const ProductPage = () => {
	return (
		<>
			<div className="flex items-center justify-center py-5">
				<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-gray-800 shadow">
					<Link to="">
						<img
							src="/images/shoes-1.jpg"
							alt="product"
							className="rounded-t-lg p-8"
						/>
					</Link>
					<div className="px-5 pb-6">
						<Link to="">
							<h5 className="text-xl font-semibold tracking-tight text-white">
								Sepatu baru
							</h5>
							<p className="text-m text- text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								nulla animi exercitationem omnis totam laudantium praesentium.
								Animi ad nemo eos?
							</p>
						</Link>
					</div>
					<div className="flex items-center justify-between px-5 pb-5">
						<span className="text-xl font-bold text-white">Rp. 1.000.000</span>
						<Button variant="bg-blue-500">Add To Card</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
