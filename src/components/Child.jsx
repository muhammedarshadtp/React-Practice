import { useContext } from "react";
import { ThemeContext } from "../App";

 const Header=()=>{
  const {theme,setTheme}=useContext(ThemeContext);
  return (
  <header>
      <h1>Theme Switcher App</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  )
}

export default Header
