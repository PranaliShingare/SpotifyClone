import React from "react";
import "./LoginPage.css";
import { accessUrl } from "./spotify";

function LoginPage() {
  return (
    <div className="loginPage">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2022/01/Spotify-Generic-Header-1440x820-1.png" alt=""/>
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default LoginPage;