import React from "react";

const Header = () => {
	return (
		<div className="bg-green-500 h-12 w-full">
			<div className="relative w-full h-12">
				<div className="flex justify-end items-center h-full px-5">
					<input
						className="bg-green-400 text-white placeholder-white rounded-md py-1 px-2 w-1/4 absolute left-0 right-0 mr-auto ml-auto"
						type="text"
						name="search_input"
						id="search_input"
						placeholder="Search"
					/>
					<div className="flex items-center">
						<span className="text-white mr-2 text-sm">Angela Stevens</span>
						<div className="h-7 w-7 mr-2 overflow-hidden rounded-full bg-black">
							<img
								className="object-fill"
								src="https://i.pinimg.com/736x/cb/aa/e7/cbaae7e35ef288b69c8d6e16589eac04.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
