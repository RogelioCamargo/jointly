import React from "react";

const TicketListItem = ({
	subject,
	description,
	customer_name,
	customer_email,
	priority,
	timestamp,
}) => {
	return (
		<li className="grid grid-cols-8 items-center border-b border-gray-100 py-2">
			<div className="col-span-4">
				<span className="block">{subject}</span>
				<span className="block text-slate-500 text-sm text-ellipsis overflow-hidden w-5/6 whitespace-nowrap">
					{description}
				</span>
			</div>
			<div className="col-span-2">
				<span className="block">{customer_name}</span>
				<span className="block text-slate-500 text-sm">
					{customer_email}
				</span>
			</div>
			<div>
				<div className={`${priority === 0 ? "bg-red-500" : priority === 1 ? "bg-yellow-500" : "bg-green-500"} text-center w-24 rounded-md`}>
					<span className="text-white text-sm">{priority === 0 ? "High" : priority === 1 ? "Medium" : "Low" }</span>
				</div>
			</div>
			<div>
				<span className="text-slate-500 text-sm">{timestamp}</span>
			</div>
		</li>
	);
};

export default TicketListItem;
