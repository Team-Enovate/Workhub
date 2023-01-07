import { BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ConnectWallet from "./pages/ConnectWallet";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard/>} />
        <Route path = "/connectwallet" element = {<ConnectWallet/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "/projects" element = {<Projects/>} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
