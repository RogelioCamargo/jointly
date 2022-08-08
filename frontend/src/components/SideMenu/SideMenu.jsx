import React from "react";

const SideMenu = () => {
	return (
		<aside className="side-menu py-3 px-5 bg-gray-100 h-full">
			<h2 className="font-bold text-3xl font-poiret-one tracking-wider">jointly</h2>
			<div className="mt-6">
				<ul className="grid gap-2">
					<li className="flex items-center">
						<span className="mr-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
								/>
							</svg>
						</span>
						<span>Inbox</span>
					</li>
					<li className="flex items-center">
						<span className="mr-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</span>
						<span>Today</span>
					</li>
					<li className="flex items-center">
						<span className="mr-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
						<span>Recent</span>
					</li>
				</ul>
			</div>
			<div className="mt-6">
				<h2 className="text-md font-bold mb-2">Priority</h2>
				<ul className="grid gap-2">
					<li className="flex items-center">
						<span className="mr-1 w-5 h-5 flex justify-center items-center">
							<div className="bg-red-500 w-3 h-3 rounded-full"></div>
						</span>
						<span>High</span>
					</li>
					<li className="flex items-center">
						<span className="mr-1 w-5 h-5 flex justify-center items-center">
							<div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
						</span>
						<span>Medium</span>
					</li>
					<li className="flex items-center">
						<span className="mr-1 w-5 h-5 flex justify-center items-center">
							<div className="bg-green-500 w-3 h-3 rounded-full"></div>
						</span>
						<span>Low</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default SideMenu;
