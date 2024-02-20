import Countup from "react-countup";
import React, { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";

const NumberCountUp = ({ from, to, duration, className = "", suffix = "" }) => {
	const ref = useRef();

	useEffect(() => {
		const controls = animate(from, to, {
			duration,
			onUpdate(value) {
				ref.current.textContent = `${value.toFixed()}${suffix}`;
			},
		});
		return () => controls.stop();
	}, [from, to]);

	return (
		<p
			className={`${className} font-sans text-7xl xl:text-5xl md:text-3xl`}
			ref={ref}
		/>
	);
};

export default NumberCountUp;
