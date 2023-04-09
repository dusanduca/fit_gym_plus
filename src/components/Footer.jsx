import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link to="/" className="logo">
                        Fit Gym Plus
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum sunt repudiandae nisi saepe sit minima in aliquam cumque architecto. Sunt.
                    </p>
                    <div className="footer_socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                            <FaLinkedin />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                            <AiFillInstagram />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                            <AiFillTwitterCircle />
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Triners</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>
            <div className="footer_copyright">
                <small>2023 dusanduca Github project #fitgymplus#</small>
            </div>
        </footer>
    )
}

export default Footer