import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            {/* <img src={}/> */}
        </div>
        <div className="rightside">
            <Link to="/"> Home </Link>
            <Link to="/profile"> profile </Link>
            <Link to="/login"> Login </Link>
            <Link to="/"> Home </Link>

        </div>
      
    </div>
  );
}

export default Navbar;
