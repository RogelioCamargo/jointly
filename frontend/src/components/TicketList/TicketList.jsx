import React from "react";
import TicketListItem from "../TicketListItem/TicketListItem";

const TicketList = () => {
	const array = new Array(20).fill(1); 
	return (
		<div className="ticket-list overflow-y-scroll h-full px-5">
			<div className="max-w-7xl mx-auto">
				<h1 className="py-3 text-2xl font-bold">Inbox</h1>
				<ul className="grid gap-y-1">
					{array.map((_) => (
						<TicketListItem />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TicketList;
