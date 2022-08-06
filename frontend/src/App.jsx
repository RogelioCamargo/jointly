import './App.css';
import CustomerConversation from "./components/CustomerConversation/CustomerConverstion";
import InternalDiscussion from "./components/InternalDiscussion/InternalDiscussion";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
			<div className="flex">
				<SideMenu />
				<div className="flex">
					<CustomerConversation />
					<InternalDiscussion />
				</div>
			</div>
    </div>
  );
}

export default App;
