import { useCallback, useState, useEffect } from "react";

import useEventListener from "./useEventListener";

export const useWindowSize = (count) => {
	const [size, setSize] = useState([0, 0]);

	useEffect(() => {
		console.log(count);
	}, [count]);

	useEffect(() => {
		const { innerWidth, innerHeight } = window;
		setSize([innerWidth, innerHeight]);
	}, []);

	useEventListener(
		"resize",
		useCallback((event) => {
			const { innerWidth, innerHeight } = event.target;
			setSize([innerWidth, innerHeight]);
		}, [])
	);

	return size;
};
