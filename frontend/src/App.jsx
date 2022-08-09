import "./App.css";
import CustomerDiscussion from "./components/CustomerDiscussion";
import CompanyDiscussion from "./components/CompanyDiscussion";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";
import TicketListItem from "./components/TicketListItem/";

function App() {
	const ticket = {
		subject: "A diam maecenas sed enim. Venenatis cras sed felis eget velit",
		description:
			"Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Proin fermentum leo vel orci porta. Elementum nibh tellus molestie nunc. Aliquam etiam erat velit scelerisque in dictum non.",
		customer_name: "Henry Scott",
		customer_email: "henry@example.com",
		priority: 2,
		timestamp: "1 day ago",
	};

	return (
		<div className="App">
			<div className="bg-green-500 h-12 w-full">
				<div className="relative w-full h-12">
					<div className="flex justify-end items-center h-full px-5">
						<input
							className="bg-green-400 text-white placeholder-white rounded-md py-1 px-2 w-1/4 absolute left-0 right-0 mr-auto ml-auto"
							type="text"
							name=""
							id=""
							placeholder="Search"
						/>
						<div className="flex items-center">
							<span className="text-white mr-2">Angela Stevens</span>
							<div className="h-8 w-8 mr-2 overflow-hidden rounded-full bg-black">
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
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="h-full">
						{/* <TicketList /> */}
						<div className="py-3 h-full">
							<div className="px-5">
								<TicketListItem {...ticket} />
							</div>
							<div className="flex mt-5 h-full">
								<CustomerDiscussion />
								<CompanyDiscussion />
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
