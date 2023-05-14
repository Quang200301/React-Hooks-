import React from "react";
import {
    NavLink,
    Link,
   
  } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink activeclassName="active" to={'/'}>Home</NavLink>
                <NavLink activeclassName="active" to={'/about'}>About</NavLink>
                <NavLink activeclassName="active" to={'/topic'}>Topic</NavLink>
                {/* <Link className="active" to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'topic'}>Topic</Link> */}
            </div>
        )
    }
}
export default Nav;