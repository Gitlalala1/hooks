import React, { useCallback, useState } from "react";
import { useToggle, useToggleWithReducer } from "./hooks/useToggle";
import useEventListener from "./hooks/useEventListener";
import { useLocalStorage } from "./hooks/useLocalStorage";
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

const UseLocalStorageComp = () => {
	const [storage, setStorage] = useLocalStorage("name_default", "Default");
	const [value, setValue] = useState(null);
	console.log(window.localStorage);
	const changeValue = (e) => {
		setValue(e.target.value);
		setStorage(e.target.value);
	};
	console.log(storage, value);
	return (
		<div>
			<p>state:{value}</p>
			<p>localstorage:{storage}</p>
			<input type="text" onChange={changeValue} />
		</div>
	);
};

const App = () => {
	return <UseLocalStorageComp />;
};

export default App;
