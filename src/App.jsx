import store from "./Store"
import { createContext, useState } from "react"
import Home from "./components/Home"
import { Provider } from "react-redux"
export   const ThemeContext=createContext()

function App() {

  const [theme,setTheme]=useState("light")

  return (
   <Provider store={store}>
   
   <ThemeContext.Provider value={{theme,setTheme}}>
    <div style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px"
      }}>
        <Home/>
    </div>
    
    
    </ThemeContext.Provider>
    
  </Provider>
  )
}

export default App
