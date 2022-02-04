import React from "react";
import "./MusicPlayer.css";
import Navbar from "./Navbar";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Song from "./Song";

function MusicPlayer({ spotify }) {
  const [{ top_50_india }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Navbar spotify={spotify} />

      <div className="body__info">
      <img src={top_50_india?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>Top 50-India</h1>
          <p>{top_50_india?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {top_50_india?.tracks.items.map((item) => (
          <Song track={item.track} />
        ))}

        
      </div>
    </div>
  );
}

export default MusicPlayer;
