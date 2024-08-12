import FormLogin from "./components/Fragments/FormLogin";

function App() {
	return (
		<>
			<div className="flex min-h-screen items-center justify-center">
				<div className="w-full max-w-xs">
					<h1 className="mb-4 text-center text-3xl font-bold text-slate-900">
						Login
					</h1>
					<p className="mb-6 text-center text-base font-medium text-slate-600">
						Welcome, Please enter your details.
					</p>
					<FormLogin />
				</div>
			</div>
		</>
	);
}

export default App;
