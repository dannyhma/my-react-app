import LoginPage from "../src/pages/login";
import RegisterPage from "../src/pages/register";

function App() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<LoginPage></LoginPage>
				<RegisterPage></RegisterPage>
			</div>
		</>
	);
}

export default App;
