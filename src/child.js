import React, { useState, forwardRef, useImperativeHandle } from "react";

const Child = (props, ref) => {
	const [style, setStyle] = useState();

	const clickChild = (color = "red") => {
		setStyle(color);
	};
	useImperativeHandle(ref, () => ({ clickChild }));
	return (
		<div>
			<h2 style={{ color: style }}>child comp</h2>
			<button onClick={() => clickChild()}>click child</button>
		</div>
	);
};
export default forwardRef(Child);
