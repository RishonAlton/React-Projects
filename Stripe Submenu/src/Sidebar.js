import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'


const Sidebar = () => {

    const {isSidebarOpen, closeSidebar} = useGlobalContext()

    return (
        <div 
            className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"} 
            onClick={(e) => {
                if(e.target.classList.contains("sidebar-container")) {
                    closeSidebar()
                }
            }}
        >
            <aside className="sidebar">
                <button className="close-button" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {
                        sublinks.map((sublink, index) => {
                            const {page, links} = sublink
                            return (
                                <div key={index} className="sidebar-link">
                                    <h5>{page}</h5>
                                    <div className="sidebar-sublinks">
                                        {
                                            links.map((link, index) => {
                                                const {label, icon, url} = link
                                                return (
                                                    <a key={index} href={url} className="sidebar-sublink">
                                                        <i>{icon}</i>
                                                        {label}
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </aside>
        </div>
    )

}


export default Sidebar
