import React, {useRef, useEffect, useState} from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {

    const { isSubmenuOpen, location, page: {page, links} } = useGlobalContext()
    const container = useRef(null)
    const [columns, setColumns] = useState("col-2")

    useEffect(() => {
        setColumns("col-2")
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.top = bottom + "px"
        submenu.style.left = center + "px"
        if(links.length === 3) {
            setColumns("col-3")
        }
        if(links.length > 3) {
            setColumns("col-4")
        }
    }, [page, location, links])

    return (
        <aside className={isSubmenuOpen ? "submenu show-submenu" : "submenu"} ref={container}>
            <h5>{page}</h5>
            <div className={`submenu-sublinks ${columns}`}>
                {
                    links.map((link, index) => {
                        const {label, icon, url} = link
                        return (
                            <a href={url} className="submenu-sublink" key={index}>
                                <i>{icon}</i>
                                {label}
                            </a>
                        )
                    })
                }
            </div>
        </aside>
    )

}


export default Submenu
