import { createContext } from "react";
import { useState } from "react";

const appContext = createContext();

function AppProvider({ children }){
    const [themeColor, setThemeColor] = useState(true);
    const [language, setLanguage] = useState("spanish");
    const [tag, setTag] = useState(0);

    const darkTheme = "dark-theme";
    const darkShadow = "dark-shadow";
    const lightTheme = "light-theme";
    const lightShadow = "light-shadow";

    const handleColorChange = () =>{
        setThemeColor(!themeColor);
    }

    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };

    const handleTagChange = (index) => {
        setTag(index);
        let tagHtml = document.querySelector(".nav");
        let nodes = tagHtml.children;
        Array.from(nodes).forEach((node, idx) => {
          if (idx == index) {
            node.classList.add("nav--activate");
          } else {
            node.classList.remove("nav--activate");
          }
        });
      };

    return(
        <appContext.Provider value={{
            themeColor,
            language,
            darkTheme,
            darkShadow,
            lightShadow,
            lightTheme,
            handleLanguageChange,
            handleColorChange,
            handleTagChange
        }}>
            {children}
        </appContext.Provider>
    )

};

export { AppProvider, appContext };