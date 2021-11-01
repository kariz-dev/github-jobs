import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavComponent() {
  return (
    <div>
      <Navbar color="info" expand="md" dark>
        <div className="container">
          <NavbarBrand href="/">
            <b>GitHub</b> Jobs
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default NavComponent;
