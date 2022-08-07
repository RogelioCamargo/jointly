import './App.css';
import CustomerDiscussion from "./components/CustomerDiscussion";
import CompanyDiscussion from "./components/CompanyDiscussion";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";
import TicketListItem from "./components/TicketListItem/";

function App() {
  return (
    <div className="App">
			<div className="bg-green-500 h-12">
				
			</div>
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="h-full">
						{/* <TicketList /> */}
						<div className="py-3 h-full">
							<div className="px-5">
								<TicketListItem />
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
