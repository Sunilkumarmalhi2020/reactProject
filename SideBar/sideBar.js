import React from "react";
import { SideBarData } from "./sideBarData"
import AppsIcon from '@material-ui/icons/Apps';
import "./sideBar.css";
import hec from "./hec.png";
function SideBar() {
    console.log(SideBarData, 'sidebarr hy ye')
    return (
        <div className="sideBar">
            <img   src={hec}/>
            <ul className="sideBar">
                {
                    SideBarData.map((val, key) => {
                        return <li key={key} className="row" onClick={()=>{window.location.pathname=val.link}}>
                            {" "}
                            <div id="icon">{val.icon}</div>
                            {" "}
                            <div id="title">{val.title}</div>

                        </li>;
                    }

                    )
                }
            </ul>
        </div>
    );

}
export default SideBar;