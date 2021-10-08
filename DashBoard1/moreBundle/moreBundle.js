import React from "react";
import "./moreBundle.css";
import moreBundle from "./moreBundl.png";
function MoreBundle(){

    return(
        <div>
           <ul className="SideBarList">
                <li className="row">
                
                <div id="title">
                    <h1>More Bundles to be announce</h1>
                 </div> {"          "}
                 <div>
                 <img   src={moreBundle}/>
                </div>
            </li>
        </ul>
        </div>
    );
}
export default MoreBundle;