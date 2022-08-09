import React from "react";
import Message from "../Message";
import MessageInput from "../MessageInput";

const CustomerConversation = () => {
	const messages = [
		{
			src: "https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png",
			name: "Nordstrom",
			timestamp: "June 7, 2022 11:39am",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			src: "https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg",
			name: "Customer",
			timestamp: "June 7, 2022 12:01pm",
			content:
				"At varius vel pharetra vel turpis nunc. Dignissim suspendisse in est ante.",
		},
		{
			src: "https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png",
			name: "Nordstrom",
			timestamp: "June 7, 2022 12:11pm",
			content:
				"Enim nunc faucibus a pellentesque sit amet. Congue quisque egestas diam in arcu cursus",
		},
	];

	return (
		<div className="relative h-full w-1/2">
			<div className="h-4/5 overflow-y-scroll">
				{messages.map((message) => (
					<Message {...message} />
				))}
			</div>
			<MessageInput />
		</div>
	);
};

export default CustomerConversation;
