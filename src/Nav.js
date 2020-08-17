import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
     
      <div className="dropdown">
      <button class="dropbtn">Charts
      <i class="fa fa-caret-down"></i>
    </button>
                <div className="dropdown-content">
                  <a>
                    <Link to="/graph">Line graph</Link></a>
                  <a>  <Link to="/about">Bar graph</Link>
                  </a>
                 
                 </div>
             </div>
          
              {/* <div class="navbar">

  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
</div> */}
    </nav>
  );
}

export default Nav;
