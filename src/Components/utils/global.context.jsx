import { createContext, useReducer } from "react";
import { useEffect } from "react";


  export const themes = {
    light: {
      font: "black",
      background: "white",
    },
    dark: {
      font: "white",
      background: "black",
    },
  };
  
  export const ContextGlobal = createContext();
  
  const themeReducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return state === themes.dark ? themes.light : themes.dark;
      default:
        return state;
    }
  };
  
  export const ContextProvider = ({ children }) => {
    const localValue = JSON.parse(localStorage.getItem("theme"));
    const [theme, dispatch] = useReducer(themeReducer, localValue ?? themes.light);
  
    const handleChangeTheme = () => {
      dispatch({ type: "changeTheme" });
    };
  
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);
  
  

  //------------


const getFavs = () => {
  const data = localStorage.getItem("favs");
  return data ? JSON.parse(data) : [];
  
};

const addFavs = (fav) => {
  const existingData = getFavs();
  const isDuplicate = existingData.some(item => item.id === fav.id);
  if (!isDuplicate) {
    localStorage.setItem("favs", JSON.stringify([...existingData, fav]));
  }
};

const reducerFavs = (stateFavs, action) => {
  switch (action.type) {
      case "add_fav":
        addFavs(action.payload);
          return [...stateFavs, action.payload];
      default:
          return stateFavs;
  }
};

const [stateFavs, dispatchFavs] = useReducer(reducerFavs, {}, getFavs);
  return (
    <ContextGlobal.Provider value={{theme, handleChangeTheme, stateFavs, dispatchFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};



