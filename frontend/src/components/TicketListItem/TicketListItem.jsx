import React from "react"; 

const TicketListItem = () => {
	return (
		<li className="grid grid-cols-8 items-center">
			<div className="col-span-4">
				<span className="block">Sent the wrong size, want to exchange</span>
				<span className="block text-slate-500 text-sm">Got a size medium, ordered a small</span>
			</div>
			<div className="col-span-2">
				<span className="block">John Smith</span>
				<span className="block text-slate-500 text-sm">johnsmith@example.com</span>
			</div>
			<div>
				<div className="bg-yellow-500 text-center w-24 rounded-md">
					<span className="text-white text-sm">Medium</span>
				</div>
			</div>
			<div>
				<span className="text-slate-500 text-sm">3 minutes ago</span>
			</div>
		</li>
	)
}

export default TicketListItem;