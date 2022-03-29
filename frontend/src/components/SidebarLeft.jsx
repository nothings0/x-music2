import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo__2 from '../assets/logo-2.png'

const mainNav = [
    {
        display: "My music",
        icon: "ri-disc-line",
        path: "/mymusic"
    },
    {
        display: "discover",
        icon: "ri-compass-line",
        path: "/"
    },
    {
        display: "XChart",
        icon: "ri-line-chart-fill",
        path: "/chart"
    },
    {
        display: "setting",
        icon: "ri-settings-3-line",
        path: "/setting"
    },
]

const SidebarLeft = () => {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    return (
        <div className="sidebar__left">
            <div className="sidebar__left__logo"><Link to='/'><img src={logo__2} alt="" /></Link></div>
            <div className="sidebar__left__navbar">
                {
                    mainNav.map((item, index) => (
                        <div className={`sidebar__left__navbar__item ${index === activeNav ? 'active' : ''}`} key={index}>
                            <Link to={item.path}><i className={item.icon}></i><span>{item.display}</span></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default SidebarLeft;
