import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log("constructor");
	}

	componentDidMount() {
		this.setState({ count: 1 });
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
		if (this.state.count === 10) {
			this.setState({ count: 5 });
		}
	}

	render() {
		return (
			<div className="flex items-center gap-8">
				<button
					className="bg-blue-600 p-3 text-white"
					onClick={() => this.setState({ count: this.state.count - 1 })}
				>
					-
				</button>
				<h1>{this.state.count}</h1>
				<button
					className="bg-blue-600 p-3 text-white"
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>
					+
				</button>
				{console.log("render")}
			</div>
		);
	}
}

export default Counter;
