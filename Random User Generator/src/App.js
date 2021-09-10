import React, { useEffect, useState } from 'react'
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone } from "react-icons/fa"


const url = "https://randomuser.me/api/"
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg"


const App = () => {

  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [info, setInfo] = useState("name")
  const [value, setValue] = useState("Rick Sorkin")

  const fetchUser = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const user = data.results[0]
    const { large: image } = user.picture
    const { first, last } = user.name
    const { email, phone } = user 
    const { age } = user.dob
    const { number, name } = user.location.street
    const newPerson = {
      image,
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone
    }
    setPerson(newPerson)
    setLoading(false)
    setInfo("name")
    setValue(newPerson.name)
  }

  const handleInfo = (e) => {
    let label
    if(e.target.classList.contains("button")) {
      label = e.target.dataset.label
    }
    else if(e.target.classList.contains("icon")) {
      label = e.target.parentElement.dataset.label
    }
    else if(e.target.parentElement.classList.contains("icon")) {
      label = e.target.parentElement.parentElement.dataset.label
    }
    setInfo(label)
    setValue(person[label])
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <div className="block black-block"></div>
      <main className="block main-block">
        <article className="user-container">
          <div>
            <img src={(person && person.image) || defaultImage} alt="" className="user-image"/>
          </div>
          <div>
            <p className="info">My {info} is</p>
            <h2 className="title">{value}</h2>
          </div>
          <div className="user-buttons">
            <button className="button name-button" data-label="name" onMouseOver={handleInfo}>
              <FaUser className="icon" />
            </button>
            <button className="button email-button" data-label="email" onMouseOver={handleInfo}>
              <FaEnvelopeOpen className="icon" />
            </button>
            <button className="button age-button" data-label="age" onMouseOver={handleInfo}>
              <FaCalendarTimes className="icon" />
            </button>
            <button className="button street-button" data-label="street" onMouseOver={handleInfo}>
              <FaMap className="icon" />
            </button>
            <button className="button phone-button" data-label="phone" onMouseOver={handleInfo}>
              <FaPhone className="icon" />
            </button>
          </div>
          <button className="generate-user" onClick={fetchUser}>
            {loading ? "Loading..." : "Random User"}
          </button>
        </article>
      </main>
    </>
  )

}


export default App
