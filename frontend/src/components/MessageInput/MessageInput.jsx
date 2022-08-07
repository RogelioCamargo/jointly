import React from "react";

const MessageInput = () => {
	return (
		<div className="absolute bottom-16 w-full px-5">
			<div className="flex items-center">
				<input
					className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					type="text"
					name="customer_response_input"
					id="customer_response_input"
				/>
				<span className="ml-2 text-slate-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default MessageInput;
