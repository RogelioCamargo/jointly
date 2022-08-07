import React from "react";
import TicketListItem from "../TicketListItem/TicketListItem";

const TicketList = () => {
	const array = new Array(20).fill(1); 
	return (
		<div className="ticket-list">
			<h1 className="p-3 text-2xl font-bold">Inbox</h1>
			<ul>
				{array.map((_) => (
					<TicketListItem />
				))}
			</ul>
		</div>
	);
};

export default TicketList;
