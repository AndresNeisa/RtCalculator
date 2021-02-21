import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component{

    render(){
        return(
            <nav className="sidebar">
                <div className="sidebar-content">
                    <div className="scrollbar-container ps">
                        

                        <Link className="sidebar-brand" to="/">
                            RT Calculator
                        </Link>
                        <ul className="sidebar-nav">
                            {/* <li className="sidebar-header"> <NavLink to="/">My Rooms</NavLink> </li>
                            <li className="sidebar-header"> <NavLink to="/add">Material Manager</NavLink> </li>
                            <li className="sidebar-header"> <NavLink to="/report">Add Material</NavLink> </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;