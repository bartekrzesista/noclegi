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
          user: action.user,
        };
      case "signOut":
        return {
          ...state,
          user: null,
        };

      default:
        throw new Error("Nie ma takiej akcji: " + action.type);
    }
  };

  const user = JSON.parse(localStorage.getItem('token-data')) ?? null;

  export const initialState = {
    theme: "primary",
    user
  };