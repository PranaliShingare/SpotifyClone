import React from "react";
import "./Navbar.css"
import { Avatar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <SearchIcon />
        <input
          placeholder="Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="navbarRight">
        <Avatar alt="Pranali" src="" />
        <h4>Pranali</h4>
      </div>
    </div>
  );
}

export default Navbar;