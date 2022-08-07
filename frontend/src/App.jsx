import './App.css';
import CustomerConversation from "./components/CustomerConversation";
import InternalDiscussion from "./components/InternalDiscussion";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";

function App() {
  return (
    <div className="App">
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="max-w-6xl mx-auto">
						{/* <TicketList /> */}
						<div className="flex">
							<CustomerConversation />
							<InternalDiscussion />
						</div>
					</div>
				</main>
			</div>
    </div>
  );
}

export default App;
