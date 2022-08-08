import './App.css';
import CustomerDiscussion from "./components/CustomerDiscussion";
import CompanyDiscussion from "./components/CompanyDiscussion";
import SideMenu from "./components/SideMenu";
import TicketList from "./components/TicketList";
import TicketListItem from "./components/TicketListItem/";

function App() {
  return (
    <div className="App">
			<div className="bg-green-500 h-12 w-full">
				<div className="relative w-full h-12">
					<div className="flex justify-end items-center h-full px-5">
						<input className="bg-green-400 text-slate-200 placeholder-slate-200 rounded-md py-1 px-2 w-1/4 absolute left-0 right-0 mr-auto ml-auto" type="text" name="" id="" placeholder="Search" />
						<div className="h-8 w-8 mr-2 overflow-hidden rounded-full ">
							<img className="object-fill" src="https://image13.photobiz.com/9048/3_20180601100200_22858587_large.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full h-full">
				<SideMenu />
				<main className="main-content">
					<div className="h-full">
						<TicketList />
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
