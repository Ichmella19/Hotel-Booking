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
import Register from "./Composants/Register";
import SucessRegister from "./Composants/SucessRegister";
import Payment from "./Composants/Payment";
import PaymentSucess from "./Composants/PaymentSucess";
import UserDashboard from "./Composants/UserDashboard";
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
                  <Route path="/Register" element={<Register />} />
                     <Route path="/SucessRegister" element={<SucessRegister />} />
                      <Route path="/Payment" element={<Payment />} />
                            <Route path="/PaymentSucess" element={<PaymentSucess />} />
                      <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  