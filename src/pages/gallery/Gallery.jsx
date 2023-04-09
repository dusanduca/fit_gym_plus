import Header from "../../components/Header";
import HeaderImages from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {

    const gallerLenght = 15
    const images = []

    for (let i = 1; i <= gallerLenght; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }


    return (
        <>
            <Header title="Our Gallery" image={HeaderImages}>
                Itaque id eligendi eaque perferendis,
                veritatis voluptate sunt optio maiores veniam.
                Qui itaque sed fuga! Non dolorum, explicabo velit animi delectus facere!
            </Header>
            <section className="gallery">
                <div className="container gallery_container">
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </article>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Gallery