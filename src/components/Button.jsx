import React from "react";

export default function Button({ title, handleClick }) {
	return (
		<button
			className="bg-slate-500 text-gray-200 hover:bg-slate-400 hover:-translate-y-0.5 transform transition active:bg-slate-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-slate-400 px-4 py-2 rounded-lg uppercase shadow-lg"
			onClick={handleClick}
		>
			{title}
		</button>
	);
}
