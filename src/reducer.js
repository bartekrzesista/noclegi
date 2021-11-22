export const reducer = (state, action) => {
    switch (action.type) {
      // const newState = {...state};
      // newState.theme = state.theme === "primary" ? "warning" : "primary";
      // return newState;
      case "change-theme":
        return {
          ...state,
          theme: state.theme === "primary" ? "warning" : "primary",
        };
      case "signIn":
        return {
          ...state,
          isAuthenticated: true,
        };
      case "signOut":
        return {
          ...state,
          isAuthenticated: false,
        };

      default:
        throw new Error("Nie ma takiej akcji: " + action.type);
    }
  };

  const isAuthenticated = JSON.parse(localStorage.getItem('token-data')) ? true : false;

  export const initialState = {
    hotels: [],
    theme: "primary",
    isAuthenticated
  };