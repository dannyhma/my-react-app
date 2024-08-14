import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Errorpage from "./pages/404.jsx";
import HomePage from "./pages/home.jsx";
import ProductPage from "./pages/product.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <Errorpage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/products",
		element: <ProductPage />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
