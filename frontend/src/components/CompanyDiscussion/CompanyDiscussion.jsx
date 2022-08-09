import React from "react";
import Message from "../Message";
import MessageInput from "../MessageInput";

const InternalDiscussion = () => {
	const messages = [
		{
			src: "https://i.pinimg.com/736x/cb/aa/e7/cbaae7e35ef288b69c8d6e16589eac04.jpg",
			name: "Angela Stevens",
			timestamp: "June 7, 2022 11:39am",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			src: "https://previews.123rf.com/images/blueskyimage/blueskyimage1411/blueskyimage141100251/34043984-portrait-of-customer-service-representative-standing-arms-crossed-man-with-headset-standing-over-whi.jpg",
			name: "Michael Edwards",
			timestamp: "June 7, 2022 12:01pm",
			content:
				"At varius vel pharetra vel turpis nunc. Dignissim suspendisse in est ante.",
		},
		{
			src: "https://thumbs.dreamstime.com/b/confident-customer-service-representative-portrait-standing-isolated-over-white-background-vertical-shot-39365903.jpg",
			name: "Luis Diaz",
			timestamp: "June 7, 2022 12:11pm",
			content:
				"Enim nunc faucibus a pellentesque sit amet. Congue quisque egestas diam in arcu cursus",
		},
		{
			src: "https://i.pinimg.com/736x/cb/aa/e7/cbaae7e35ef288b69c8d6e16589eac04.jpg",
			name: "Angela Stevens",
			timestamp: "June 7, 2022 11:39am",
			content:
				"Mauris ultrices eros in cursus turpis massa",
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

export default InternalDiscussion;
