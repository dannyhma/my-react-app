import { useState } from "react";
import PropTypes from "prop-types";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Button(props) {
	const { variant = "bg-black", children = "Button" } = props;
	return (
		<button
			className={`${variant} h-10 rounded-md px-6 font-semibold text-white`}
			type="submit"
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.string,
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex flex-row items-center justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<div className="mb-6 flex flex-row items-center justify-center gap-x-4 text-sm font-medium">
				<Button variant="bg-red-500">Login</Button>
				<Button variant="bg-blue-500">Register</Button>
				<Button></Button>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
