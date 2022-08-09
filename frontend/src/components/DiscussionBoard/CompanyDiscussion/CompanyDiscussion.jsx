import React from "react";
import Message from "../../Message";
import MessageInput from "../../MessageInput";
import { companyDiscussionMessages } from "../../../data";

const InternalDiscussion = () => {
	return (
		<div className="relative h-full w-1/2">
			<div className="h-4/5 overflow-y-scroll">
				{companyDiscussionMessages.map((message) => (
					<Message {...message} />
				))}
			</div>
			<MessageInput />
		</div>
	);
};

export default InternalDiscussion;
