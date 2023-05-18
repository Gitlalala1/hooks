import React, { useEffect, useRef } from "react";

const useEventListener = (eventName, handler, element = window) => {
	const saveHandler = useRef();

	useEffect(() => {
		saveHandler.current = handler;
	}, [handler]);
	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) {
			throw new Error("error support" + element);
		}

		const eventListener = (event) => {
			if (saveHandler !== null) {
				saveHandler.current(event);
			}
		};

		element.addEventListener(eventName, eventListener);

		return () => element.removeEventListener(eventName, eventListener);
	}, [eventName, element]);
};

export default useEventListener;
