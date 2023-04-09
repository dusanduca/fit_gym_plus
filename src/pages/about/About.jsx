import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";



const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore dolores laboriosam voluptatibus nulla doloribus omnis
                magni asperiores repellat possimus molestiae.
            </Header>

            <section className="about_story">
                <div className="container about_story-container">
                    <div className="about_section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Excepturi atque nesciunt officiis veniam repudiandae
                            facere aliquam corrupti obcaecati recusandae,
                            nemo dolor dolorem corporis eum est, nulla vitae hic quibusdam quisquam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about_vision">
                <div className="container about_vision-container">
                    <div className="about_section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Excepturi atque nesciunt officiis veniam repudiandae
                            facere aliquam corrupti obcaecati recusandae,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates
                            nemo dolor dolorem corporis eum est, nulla vitae hic quibusdam quisquam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates.
                        </p>
                    </div>
                    <div className="about_section-image">
                        <img src={VisionImage} alt="" />
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="container about_mission-container">
                    <div className="about_section-image">
                        <img src={MissionImage} alt="" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Excepturi atque nesciunt officiis veniam repudiandae
                            facere aliquam corrupti obcaecati recusandae,
                            nemo dolor dolorem corporis eum est, nulla vitae hic quibusdam quisquam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates.
                            Excepturi atque nesciunt officiis veniam repudiandae
                            facere aliquam corrupti obcaecati recusandae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur,
                            veniam quasi illum quis porro voluptates dolor tempore sunt! Voluptates.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About