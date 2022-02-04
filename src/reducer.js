export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQCKtgl2F9niLJhNxcc0lgkBcxSvIfrwKXjs5uYjNU3NQ5W_0R8ZANyMW5_8uEm11QiAqsiYjYjJ8aVIiSx6_WScXOIl3fvR3PtfM23oxzGb_N6o7oD7P68wOV6TZzHBjsFhg6QwFvg7HeMQifUM9pDNdjSDL0bCaV4D3TsghbbUdcUjIKGm",
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

       case "SET_TOKEN":
         return {
        ...state,
        token: action.token,
      };

      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_PLAYLIST":
      return {
        ...state,
        top_50_india: action.top_50_india,
      };

      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

        default:
      return state;
  }
};

export default reducer;

  