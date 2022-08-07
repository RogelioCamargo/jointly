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
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default MessageInput;
