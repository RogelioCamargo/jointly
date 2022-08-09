import "./App.css";
import CustomerDiscussion from "./components/CustomerDiscussion";
import CompanyDiscussion from "./components/CompanyDiscussion";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";
import TicketListItem from "./components/TicketListItem/";
import Header from "./components/Header";

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
			<Header />
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="h-full">
						<TicketList />
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
