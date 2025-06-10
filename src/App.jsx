import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./Layouts/Layout";
import Scroll from "./Composants/Scroll";
import Home from "./Composants/Home";
import Origin from "./Composants/Origin";
import CreateAccount from "./Composants/CreateAccount";
import Login from "./Composants/Login";
import SucessAccount from "./Composants/SucessAccount";
import SucessLogin from "./Composants/SucessLogin";
import Booking from "./Composants/Booking";
const App = () => {
    return (
      <Router> 
           <Scroll />
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
               <Route path="/Home" element={<Origin />} />
          </Route>
          <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Login" element={<Login />} />
             <Route path="/SucessAccount" element={<SucessAccount />} />
              <Route path="/SucessLogin" element={<SucessLogin />} />
                <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  