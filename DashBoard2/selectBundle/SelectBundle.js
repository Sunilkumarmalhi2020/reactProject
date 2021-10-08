import React from "react";
import "./selectBundle.css";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import jaz from "./jazz.png";
import tel from "./tele.png";
import zong from "./zong.png";
function SelectBundle(){

    return(
        <div>
           <ul className="SideBarList">
                <li className="row">
                
                <div id="title">
                <h3 id="pand"><KeyboardArrowLeftIcon></KeyboardArrowLeftIcon><KeyboardArrowRightIcon/></h3>
                    <h1>Select Bundle</h1>
                    <img   src={jaz}/>{"          "}{"          "}
                    <img   src={tel}/>{"          "}{"          "}
                    <img   src={zong}/>

                    
                 </div> {"          "}
                 <div>
                 
                </div>
            </li>
        </ul>
        </div>
    );
}
export default SelectBundle;