import React from "react";
import TicketListItem from "../TicketListItem/TicketListItem";
import { tickets } from "../../data";

const TicketList = () => {
	return (
		<div className="ticket-list overflow-y-scroll h-full px-5">
			<div className="max-w-7xl mx-auto">
				<h1 className="py-3 text-2xl">Inbox</h1>
				<ul className="grid gap-y-1">
					{tickets.map((ticket) => (
						<TicketListItem {...ticket} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TicketList;
