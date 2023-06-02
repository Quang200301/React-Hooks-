import React from "react";
import {
    NavLink,
    Link,
   
  } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <div>
                <NavLink activeclassName="active" to={'/'}>Home</NavLink>
                <NavLink activeclassName="active" to={'/about'}>About</NavLink>
                <NavLink activeclassName="active" to={'/topic'}>AdMin</NavLink>
                </div>
                <div>
                <NavLink activeclassName="active" to={'/contact'}>Contact</NavLink>
                <NavLink activeclassName="active" to={'/sigin'}>Sigin</NavLink>
                <NavLink activeclassName="active" to={'/sigin'}>Logout</NavLink>
                </div>
                {/* <Link className="active" to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'topic'}>Topic</Link> */}
            </div>
        )
    }
}
export default Nav;