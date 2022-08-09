import React from "react";
import Message from "../../Message";
import MessageInput from "../../MessageInput";
import { customerDiscussionMessages } from "../../../data";

const CustomerConversation = () => {
	
	return (
		<div className="relative h-full w-1/2">
			<div className="h-4/5 overflow-y-scroll">
				{customerDiscussionMessages.map((message) => (
					<Message {...message} />
				))}
			</div>
			<MessageInput />
		</div>
	);
};

export default CustomerConversation;
