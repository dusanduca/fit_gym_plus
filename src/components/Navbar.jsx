import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false)

    return (
        <nav>
            <div className="container nav_container">
                <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                    Fit Gym Plus
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) =>
                                        isActive ? 'active-nav' : ''}
                                        onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <AiFillCloseCircle /> : <GoThreeBars />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar