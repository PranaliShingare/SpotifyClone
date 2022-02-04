import React from "react";
import "./Playlist.css"
import Icons from "./Icons";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from "./StateProvider";

function Playlist() {

return (
    <div className="sidebar">
        <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Icons Icon={HomeIcon} option="Home" />
      <Icons Icon={SearchIcon} option="Search" />
      <Icons Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <Icons option="Top 50-India" />
      <Icons option="Pranali Playlist" />
      <Icons option="Bollywood Songs" />
      <Icons option="My Favourites" />
      <Icons option="Workout Playlist" />
    </div>
  );
}

export default Playlist;