import React, {
	useState,
	useEffect,
	useLayoutEffect,
	useRef,
	useMemo,
} from "react";

const App = () => {
	const inputRef = useRef();
	const toggleRef = useRef(false);
	const [toogleState, setToggleState] = useState(false);
	const onFocus = () => {
		inputRef.current.focus();
	};
	const onChange = (e) => {
		if (e.target.value === "blur") inputRef.current?.blur();
	};
	const changeToggleRef = () => {
		toggleRef.current = !toggleRef.current;
		console.log("toggle ref");
	};
	const changeToggleState = () => {
		setToggleState((prev) => !prev);
		console.log("toggle state");
	};
	console.log("render");
	return (
		<div>
			<input type="text" ref={inputRef} onChange={onChange} />
			<button onClick={onFocus}>Focus</button>
			<div>
				<button onClick={changeToggleRef}>toggle ref</button>
				<button onClick={changeToggleState}>toggle state</button>
			</div>
		</div>
	);
};

export default App;
