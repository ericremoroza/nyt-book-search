import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className=" nav navBarThingy nav-justified">
        <div className="col-md-4" id="classLink">  <a href="/">Book Search</a></div>
        <div className="col-md-4">{props.message}</div>
    </div>
)

export default Nav;