import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import HeaderImage from "../../assets/background_5.jpg";
import "./Gallery.css";

const Gallery = () => {
  const galleryLength = 12;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../assets/galleryImage/gallery_${i}.jpg`));
  }

  return (
    <>
      <HeaderPage title="Galleri" image={HeaderImage} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint
        est odio voluptates aperiam nisi accusamus quasi iusto eius. Animi
        provident non doloremque autem ratione a quos excepturi dolores eveniet.
      </HeaderPage>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
