import "./App.css";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";
import Header from "./components/Header";
import DiscussionBoard from "./components/DiscussionBoard";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="h-full">
						{/* <TicketList /> */}
						<DiscussionBoard />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
