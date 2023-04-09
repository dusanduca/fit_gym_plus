import Header from "../../components/Header";
import HeaderImages from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImages}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae ab dolorem expedita reprehenderit voluptatum quasi ipsa veritatis facilis eius laudantium!
            </Header>
            <section className="contact">
                <div className="container contact_container">
                    <div className="contact_wrapper">
                        <a href="mailto:miticdusan80@gmail.com" target="_blank"
                            rel="noreferrer noopener">
                            <MdEmail />
                        </a>
                        <a href="https://m.me/" target="_blank"
                            rel="noreferrer noopener">
                            <BsMessenger />
                        </a>
                        <a href="https://wa.me/" target="_blank"
                            rel="noreferrer noopener">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact