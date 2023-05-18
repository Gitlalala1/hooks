import React, { useCallback, useState } from "react";
import { useToggle, useToggleWithReducer } from "./hooks/useToggle";
import useEventListener from "./hooks/useEventListener";
const UseToggleComp = () => {
	const [toggle, setToggle] = useToggleWithReducer();
	return (
		<div>
			<div className="toggle">
				<button
					onClick={() => setToggle(!toggle)}
				>{`click toggle: ${toggle}`}</button>
			</div>
		</div>
	);
};

const UseEventListenerComp = () => {
	const [coords, setCoords] = useState([]);
	const onMouseMove = useCallback((event) => {
		console.log(event);
		const { clientX, clientY } = event;
		const newPoint = { x: clientX, y: clientY };

		setCoords((array) => [...array, newPoint]);
	}, []);
	useEventListener("mousemove", onMouseMove);

	return (
		<>
			<h2>events</h2>
			{coords.map((point, index) => {
				const style = {
					position: "absolute",
					left: point.x - 10,
					top: point.y - 10,
					width: 10,
					height: 10,
					backgroundColor: "red",
					borderRadius: "50%",
				};
				return <div key={index} style={style} />;
			})}
		</>
	);
};

const App = () => {
	return <UseEventListenerComp />;
};

export default App;
