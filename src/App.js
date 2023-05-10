import React, { useState } from "react";

const initialState = {
	name: "Bomik",
	age: 30,
};

function App() {
	const [count, multiply, share] = useCounter(1, 3);

	const [obj, setObj] = useMergeState(initialState);
	console.log(obj);
	return (
		<div className="App">
			<div className="counter">
				<button onClick={multiply}>click *</button>
				<button onClick={share}>click /</button>
				<span>{count}</span>
			</div>
			<div className="mergeState">
				<div>
					<input
						type="text"
						onChange={(e) => setObj({ text: e.target.value })}
					/>
					<div>
						<State obj={obj} />
					</div>
				</div>
			</div>
		</div>
	);
}
const State = ({ obj }) => {
	return (
		<div style={{ display: "flex" }}>
			<div>
				{Object.keys(obj).map((el) => (
					<span style={{ display: "block" }}>{el}</span>
				))}
			</div>
			<div>
				{Object.values(obj).map((el) => (
					<span style={{ display: "block" }}>{el}</span>
				))}
			</div>
		</div>
	);
};
const useMergeState = (initialState) => {
	const [state, setState] = useState(initialState);

	const mergeState = (changes) => {
		setState((prev) => ({
			...prev,
			...changes,
		}));
	};

	return [state, mergeState];
};

//
const useCounter = (initValue = 1, delta = 2) => {
	const [state, setState] = useState(initValue);

	const multiply = () => {
		setState((state) => state * delta);
	};

	const share = () => {
		setState((state) => state / delta);
	};

	return [state, multiply, share];
};
export default App;
