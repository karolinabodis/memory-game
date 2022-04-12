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
						? "object-cover object-top w-full h-full border border-gray-400 cursor-auto transition-all ease-in opacity-0 rotate-y-0 delay-200"
						: flipped
						? "object-cover object-top w-full h-full border border-gray-400 transition-transform ease-in  rotate-y-0"
						: "absolute object-cover object-top w-full h-full border border-gray-400 transition-transform ease-in  rotate-y-90"
				}
				alt="cat"
			/>

			<div
				// initial: rotate-y-0
				className={
					flipped
						? "w-full h-full bg-gray-300 border border-gray-400 rotate-y-90 delay-0"
						: "w-full h-full bg-gray-300 border border-gray-400 transition-transform ease-in  rotate-y-0 delay-200"
				}
				onClick={handleClick}
			></div>
		</div>
	);
}
