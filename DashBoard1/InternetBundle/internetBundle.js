import React from "react";
import "./InternetBundle.css";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
function InternateBundle(){

    return(
        <div>
           <ul className="SideBarList">
                <li className="row">
                
                <div id="title">
                    <h1>Internet Bundle</h1>
                    <p>lorem ipsum is simply dummy text</p>
                    <hr/>
                    <h1>Apply Now</h1>
                    <h3 id="pand"><KeyboardArrowRightIcon/></h3>
                 </div> {"          "}
                 <div>
                    <RssFeedIcon/>
                </div>
                
            </li>
        </ul>
        </div>
    );
}
export default InternateBundle;