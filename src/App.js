import React, {
	useState,
	useEffect,
	useLayoutEffect,
	useRef,
	useMemo,
} from "react";
import Child from "./child";

const App = () => {
	const refChild = useRef(null);
	const clickApp = () => {
		if (refChild.current) {
			console.log(refChild.current.clickChild("green"));
		}
	};
	return (
		<div>
			<h1>App comp</h1>
			<Child ref={refChild} />
			<button onClick={clickApp}>click app</button>
		</div>
	);
};

export default App;
