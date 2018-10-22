import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';


const Navbar = (props) => (
  <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand">IAmDead</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <a className={
      window.location.pathname === '/' 
      ? 'active' :""
      }
      >
      <Link to='/'>Login</Link>
   </a>
    </li>
    <li className="nav-item">
    <a classNameName={
      window.location.pathname === '/Home' 
      ? 'active' :""
      }
      >
      <Link to='/home'>Home</Link>
   </a>
    </li>
   
  </ul>
  <a classNameName={
      window.location.pathname === '/Search' 
      ? 'active' :""
      }
      >
      <Link to='/search'> <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
  </form>
      </Link>
   </a>
 
</div>
</nav>
</div>
)
export default Navbar;

