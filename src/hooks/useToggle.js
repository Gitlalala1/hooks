import { useCallback, useReducer, useState } from "react";

const useToggle = (initialState) => {
	const [value, setValue] = useState(initialState || false);

	const changeToggle = useCallback(() => {
		setValue((prev) => !prev);
	}, []);

	return [value, changeToggle];
};

const useToggleWithReducer = (initialState) => {
	return useReducer((state) => !state, initialState || false);
};

export { useToggle, useToggleWithReducer };
