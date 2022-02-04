import React from "react";
import "./Footer.css"
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__left">
          <img className="footer__albumLogo" src="https://i1.sndcdn.com/artworks-vaV5FeWGWDZcytya-8G71RA-t500x500.jpg" alt="" />
          <div className="footer__songInfo">
            <h4>Excuses</h4>
            <p>AP Dhillon, Gurinder Gill, Intense - Excuses</p>
          </div>
        </div>

        <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
            fontSize="large"
            className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
        </div>

        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
    </div>
  );
}

export default Footer;