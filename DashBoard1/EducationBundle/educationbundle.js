import React from "react";
import "./educationbundle.css";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import cofee from "./cofee.png";
function EducationBundle(){

    return(
        <div>
           <ul className="SideBarList">
                <li className="row">
                
                <div id="title">
                    <h1>Education Bundle</h1>
                    <p>lorem ipsum is simply dummy text</p>
                    <hr/>
                    <h1>Apply Now</h1>
                    <h3 id="pand"><KeyboardArrowRightIcon/></h3>
                 </div> {"          "}
                 <div>
                 <img   src={cofee}/>
                </div>
            </li>
        </ul>
        </div>
    );
}
export default EducationBundle;