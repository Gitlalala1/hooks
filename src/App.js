import React from "react";
import { useToggle, useToggleWithReducer } from "./hooks/useToggle";
const App = () => {
	const [toggle, setToggle] = useToggleWithReducer();
	console.log(toggle);
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

export default App;
