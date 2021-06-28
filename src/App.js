import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./contexts/AuthContext";

import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import UpdateProfile from "./views/auth/UpdateProfile";

import Explore from "./views/home/Explore";
import YourFarm from "./views/home/YourFarm";
import SelectFarm from "./views/home/SelectFarm";
import Settings from "./views/settings/Settings";
import FarmFarang from "./views/home/farms/FarmFarang";
import MicroGreensFarm from "./views/home/farms/MicroGreensFarm";
import Cart from "./views/cart/Cart";

import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
             
                <PrivateRoute exact path="/" component={Explore} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              
            </Switch>
          

          
            <Route path="/farms" component={SelectFarm} />
            <Route path="/your-farm" component={YourFarm} />
            <Route path="/settings" component={Settings} />
            <Route path="/farmfarang" component={FarmFarang} />
            <Route path="/mrmicrogreensfarm" component={MicroGreensFarm} />
            <Route path="/cart" component={Cart} />
            
            </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
