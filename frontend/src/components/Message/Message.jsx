import React from "react";

const Message = ({ src, name, content, timestamp }) => {
	return (
		<div className="px-5">
			<div className="flex mb-3">
				<div className="h-9 w-9 mr-2 overflow-hidden rounded-full bg-white">
					<img className="object-fill" src={src} alt="" />
				</div>
				<div className="w-3/4">
					<p className="font-bold">{name}<span className="text-sm text-slate-500 ml-1 font-normal">{timestamp}</span></p>
					<p className="text-sm">{content}</p>
				</div>
			</div>
		</div>
	);
};

export default Message;
