import React from "react";
import TicketListItem from "../TicketListItem/TicketListItem";

const TicketList = () => {
	const tickets = [
		{
			subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			customer_name: "Alex Jones", 
			customer_email: "alex@example.com",
			priority: 0,
			timestamp: "3 minutes ago"
		},
		{
			subject: "Sit amet mauris commodo quis imperdiet massa tincidunt nunc", 
			description: "Amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquam ultrices sagittis orci a. Nunc sed velit dignissim sodales ut eu sem. Semper quis lectus nulla at.",
			customer_name: "Kyle McKeag", 
			customer_email: "kyle@example.com",
			priority: 1,
			timestamp: "12 hours ago"
		},
		{
			subject: "A diam maecenas sed enim. Venenatis cras sed felis eget velit", 
			description: "Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Proin fermentum leo vel orci porta. Elementum nibh tellus molestie nunc. Aliquam etiam erat velit scelerisque in dictum non.",
			customer_name: "Henry Scott", 
			customer_email: "henry@example.com",
			priority: 2,
			timestamp: "1 day ago"
		}
	]

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
