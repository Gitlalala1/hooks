import React, { useState, useEffect } from "react";

const useCharacterPosition = (step) => {
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event) => {
			switch (event.key) {
				case "ArrowLeft":
					setLeft((prev) => prev - step);
					break;
				case "ArrowRight":
					setLeft((prev) => prev + step);
					break;
				case "ArrowUp":
					setTop((prev) => prev - step);
					break;
				case "ArrowDown":
					setTop((prev) => prev + step);
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [step]);

	return [left, top];
};
const initialStyle = {
	background: "blue",
	width: 100,
	height: 100,
	position: "absolute",
	left: 0,
	top: 0,
	transition: ".1s",
};
const App = () => {
	const [left, top] = useCharacterPosition(50);
	const [style, setStyle] = useState(initialStyle);

	useEffect(() => {
		setStyle((prev) => ({
			...prev,
			top,
			left,
		}));
	}, [left, top]);

	return (
		<div>
			<h3>
				[{left},{top}]
			</h3>
			<div style={style}></div>
		</div>
	);
};
export default App;
