import React from "react";

import { AiFillVideoCamera, AiFillHome } from "react-icons/ai";

import { VscRepoPull } from "react-icons/vsc";

import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src="logo.png" alt=""  className="logo"/>
      </div>
      {/* <ul>
        <li>
          <NavLink  to="/invoice_list">
            <p>invoice_list</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoiceform">
           <p> add invoice</p>
          </NavLink>
        </li>
       
      </ul> */}
      <div className="side_bottom">
        <div className="mode_d">
      <button className="mode"><img src="sun.svg" alt="" /></button>
      </div>
      <div className="prf_d">
      <img src="profile.jpeg" alt=""  className="profile"/></div>
    </div>
    </div>
  );
};

export default SideBar;
