import React, { useEffect, useState } from "react";
import LoginPage from './LoginPage';
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const s = new SpotifyWebApi();

function App() {
const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse(null);
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.setAccessToken(_token);

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
        });

      s.getPlaylist("37i9dQZEVXbLZ52XmnySJg").then((response) =>
        dispatch({
          type: "SET_PLAYLIST",
          top_50_india: response,
        })
      );
    }
    
  }, [token, dispatch]);


  return (
    <div className="App">
      {
        token ? (
          <Player spotify={s} />
        ) : (
          <LoginPage />
        )
      }
      
    </div>
  );
}

export default App;
