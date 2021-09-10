import React, { useEffect, useState } from 'react'
import data from "./data"
import Article from './Article'


const App = () => {
  
  const getStorageTheme = () => {
    let theme = "light-theme"
    if(localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme")
    }
    return theme
  }

  const [theme, setTheme] = useState(getStorageTheme())

  const changeTheme = () => {
    if(theme === "light-theme") {
      setTheme("dark-theme")
    }
    else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="button" onClick={changeTheme}>Change Theme</button>
        </div>
      </nav>
      <section className="articles">
        {
          data.map(item => <Article key={item.id} {...item} />)
        }
      </section>
    </main>
  )

}


export default App

