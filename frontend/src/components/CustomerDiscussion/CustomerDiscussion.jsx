import React from "react";
import Message from "../Message";
import MessageInput from "../MessageInput";

const CustomerConversation = () => {
	return (
		<div className="relative h-full w-1/2">
			<div className="h-5/6 overflow-y-scroll">
				<Message
					src="https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png"
					name="Nordstrom"
					timestamp="June 7, 2022 11:39am"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://static.showit.co/800/u9sZQNhkSNi5VaQ9kLgwKQ/128788/korey_howell_photography_group_austin_texas_professional_branding_portraits.jpg"
					name="John Smith"
					timestamp="September 10, 2022 2:39pm"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png"
					name="Nordstrom"
					timestamp="June 7, 2022 11:39am"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png"
					name="Nordstrom"
					timestamp="June 7, 2022 11:39am"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://static.showit.co/800/u9sZQNhkSNi5VaQ9kLgwKQ/128788/korey_howell_photography_group_austin_texas_professional_branding_portraits.jpg"
					name="John Smith"
					timestamp="September 10, 2022 2:39pm"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://static.showit.co/800/u9sZQNhkSNi5VaQ9kLgwKQ/128788/korey_howell_photography_group_austin_texas_professional_branding_portraits.jpg"
					name="John Smith"
					timestamp="September 10, 2022 2:39pm"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png"
					name="Nordstrom"
					timestamp="June 7, 2022 11:39am"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://static.showit.co/800/u9sZQNhkSNi5VaQ9kLgwKQ/128788/korey_howell_photography_group_austin_texas_professional_branding_portraits.jpg"
					name="John Smith"
					timestamp="September 10, 2022 2:39pm"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Message
					src="https://media.glassdoor.com/sqll/1704/nordstrom-squarelogo-1557161537917.png"
					name="Nordstrom"
					timestamp="June 7, 2022 11:39am"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
			</div>
			<MessageInput />
		</div>
	);
};

export default CustomerConversation;
