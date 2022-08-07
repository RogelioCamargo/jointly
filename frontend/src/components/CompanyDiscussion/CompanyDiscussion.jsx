import React from "react"; 
import Message from "../Message";
import MessageInput from "../MessageInput";

const InternalDiscussion = () => {
	return (
		<div className="relative h-full w-1/2 overflow-y-scroll">
			<Message
				src="https://image13.photobiz.com/9048/3_20180601100200_22858587_large.jpg"
				name="Michael Stevens"
				timestamp="July 12, 2022 1:39pm"
				content="Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus."
			/>
			<MessageInput />
		</div>
	)
}

export default InternalDiscussion;