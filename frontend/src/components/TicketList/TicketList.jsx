import React from "react";
import TicketListItem from "../TicketListItem/TicketListItem";

const TicketList = () => {
	const array = new Array(20).fill(1); 
	return (
		<div className="ticket-list">
			<ul className="max-w-6xl mx-auto">
				{array.map((_) => (
					<TicketListItem />
				))}
			</ul>
		</div>
	);
};

export default TicketList;
