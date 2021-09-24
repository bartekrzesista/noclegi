export const reducer = (state, action) => {
    switch (action.type) {
      // const newState = {...state};
      // newState.theme = state.theme === "primary" ? "warning" : "primary";
      // return newState;
      case "set-hotels":
        return {
          ...state,
          hotels: action.hotels,
        };
      case "change-theme":
        return {
          ...state,
          theme: state.theme === "primary" ? "warning" : "primary",
        };
      case "set-loading":
        return {
          ...state,
          loading: action.loading,
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

  export const initialState = {
    hotels: [],
    loading: true,
    theme: "primary",
    isAuthenticated: false,
  };