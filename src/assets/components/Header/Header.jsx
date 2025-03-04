import React, { useState } from "react";
import "./Header.css";
import Netflix from "../../images/Netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../../firebase";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflix} alt="Netflix_Logo" width="100" className="Netflix" />
            </li>
            <li className="header_item">Netflix</li>
            <li className="header_item">Home</li>
            <li className="header_item">Tv Shows</li>
            <li className="header_item">Movies</li>
            <li  className="header_item" >Latest</li>
            <li  className="header_item">My List</li>
            <li  className="header_item">Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li className="dropdown">
              <ArrowDropDownIcon />
              <div className="signout_container">
               <p onClick={() => logout()}>Sign Out</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header; 