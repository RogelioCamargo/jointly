import React from "react";
import TicketListItem from "../TicketListItem";
import CustomerDiscussion from "./CustomerDiscussion";
import CompanyDiscussion from "./CompanyDiscussion";
import { ticket } from "../../data";

const DiscussionBoard = () => {
	return (
		<div className="py-3 h-full">
			<div className="px-5">
				<TicketListItem {...ticket} />
			</div>
			<div className="flex mt-5 h-full">
				<CustomerDiscussion />
				<CompanyDiscussion />
			</div>
		</div>
	);
};

export default DiscussionBoard;
