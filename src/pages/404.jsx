import { useRouteError } from "react-router-dom";

const Errorpage = () => {
	const error = useRouteError();
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="mb-4 text-5xl font-bold">Oops!</h1>
				<p>Sorry, an unexpected error has occured</p>
				<p>{error.statusText || error.message}</p>
			</div>
		</>
	);
};

export default Errorpage;
