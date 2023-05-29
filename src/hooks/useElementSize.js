import { useCallback } from "react";
import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

const defaultSize = { width: 0, height: 0 };
export const useElementSize = (elementRef) => {
	const [size, setSize] = useState(defaultSize);

	const updateSizeElement = useCallback(() => {
		if (elementRef.current) {
			const { width, height } = elementRef.current.getBoundingClientRect();
			setSize({ width, height });
		}
	}, [elementRef]);

	useEffect(() => {
		updateSizeElement();
	}, [updateSizeElement]);

	useEventListener("resize", updateSizeElement);
	return size;
};
