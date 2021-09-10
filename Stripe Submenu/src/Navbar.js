import React from 'react'
import logo from "./Images/Logo.svg"
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from './context'


const Navbar = () => {

    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const DOMRect = e.target.getBoundingClientRect()
        const center = (DOMRect.left + DOMRect.right) / 2
        const bottom = DOMRect.bottom - 3
        openSubmenu(page, {center, bottom})
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains("link-button")) {
            closeSubmenu()
        }
    }

    return (
        <nav className="navbar" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="logo" alt="" />
                    <button className="hamburger-button" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-button" onMouseOver={displaySubmenu}>Products</button>
                    </li>
                    <li>
                        <button className="link-button" onMouseOver={displaySubmenu}>Developers</button>
                    </li>
                    <li>
                        <button className="link-button" onMouseOver={displaySubmenu}>Company</button>
                    </li>
                </ul>
                <button className="sign-in">Sign in</button>
            </div>
        </nav>
    )

}


export default Navbar
