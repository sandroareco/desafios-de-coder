import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";

const Navbar = () => {
    // const user = {nombre: "busca tu producto"}
    return(
        <>
        <CartWidget />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarColor02">
        </div>
          </div>
        </nav>
        </>
    );
}

export default Navbar;