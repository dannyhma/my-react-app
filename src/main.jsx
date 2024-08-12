import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Errorpage from "./pages/404.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello World!</div>,
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
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
