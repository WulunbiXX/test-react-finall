import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {

    const [navbar, setNavbar] = useState([
        { title: 'Home', url: '/', icon: 'fa-solid fa-home-user', cName: 'nav-links' , key: 0 },
        { title: 'About', url: '/about', icon: 'fa-solid fa-circle-info', cName: 'nav-links', key: 1 },
        { title: 'Services', url: '/services', icon: 'fa-solid fa-briefcase', cName: 'nav-links',key: 2 },
        { title: 'Contact', url: '/contact', icon: 'fa-solid fa-address-book', cName: 'nav-links', key: 3 },
        { title: 'Sign up', url: '/Sign', cName: 'nav-links'}
    ])

    const [clicked, SetClicked] = useState(false)

    const toggleMenu = () => {
        SetClicked(!clicked)
    }

    return (
        <nav className="NavbarItems">
            <h1 className="logo">
                <a href="/">React</a><i className="fab fa-react"></i>
            </h1>
            <div className="Menu-icon" onClick={toggleMenu}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? "Nav-menu active" : "Nav-menu"}>
                {navbar.map((nav) => {
                    return (
                        <li key={nav.key}>
                            <Link to={nav.url} className={nav.cName}>
                                <i className={nav.icon}></i>
                                {nav.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar