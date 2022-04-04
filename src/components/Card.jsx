import React from "react";

export default function Card({ card, handleSelect, flipped, disabled }) {
	function handleClick() {
		if (!disabled) {
			return handleSelect(card);
		}
	}

	return (
		<div className="relative w-32 h-32 mx-auto cursor-pointer">
			<img
				src={card.url}
				// initial: rotate-y-90
				className={
					flipped && card.matched
						? "object-cover object-top w-full h-full transition-opacity opacity-0 cursor-auto"
						: flipped
						? "object-cover object-top w-full h-full border border-gray-400 rotate-y-0 transition-transform delay-150"
						: "absolute inset-0 w-full h-full rotate-y-90"
				}
				alt="cat"
			/>

			<div
				// initial: rotate-y-0"
				className={
					flipped
						? "rotate-y-90"
						: "w-full h-full bg-gray-300 border border-gray-400 rotate-y-0 transition-transform delay-150"
				}
				onClick={handleClick}
			></div>
		</div>
	);
}
