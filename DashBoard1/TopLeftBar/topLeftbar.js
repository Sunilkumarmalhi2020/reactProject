import React from "react";
import "./TopLeftBar.css";
import logo from "./logo.png";
function TopLeftBar(){

    return(
        <div>
            <ul className="SideBarList">
                <li className="row">
                <div id="title">
                    <h1><bold id="clr1">Welcome to </bold><bold id="clr">HEC</bold> Talem Bundle</h1>
                    <h3>Apply from available bundle</h3>
                 </div> {"          "}
                <div id="icon">
                    <img   src={logo}/>
                </div>
                
                 </li>
            </ul>
        </div>
    );
}
export default TopLeftBar;