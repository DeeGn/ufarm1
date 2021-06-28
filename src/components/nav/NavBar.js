import React, { Component } from "react";
import NavItem from "../nav/NavItem";
import { Nav, Navbar } from "react-bootstrap";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <>
        <Navbar
          className="justify-content-center text-center mt-5"
          fixed="bottom"
          bg="dark"
          variant="dark"
        >
          return (
          <Nav
            className="justify-content-center text-center"
            activeKey="/"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            
            
            <img src ="/explore-icon1.png" height="33" width="33" alt="your farm"></img>
            <NavItem
              item="Explore"
              tolink="/"
              activec={this.activeitem} 
            >
            </NavItem>
            
            <img src ="/carrot-test-icon.png" height="33" width="33" alt="your farm"></img>
            <NavItem
              item="YourFarm"
              tolink="/your-farm"
              activec={this.activeitem}
            ></NavItem>
            <img src ="/settings-icon1.png" height="33" width="33" alt="settings"></img>
            <NavItem
              item="Settings"
              tolink="/settings"
              activec={this.activeitem}
            ></NavItem>
          </Nav>
          )
        </Navbar>
      </>
    );
  }
}
export default NavBar;
