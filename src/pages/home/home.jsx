import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../../assets/images/logo 1.png';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import ContainerHomepage from '../../components/Home/containerHome1';

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([image1, image2, image3, image4]);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [length]);

  const handleThumbnailClick = (index) => {
    // Move selected image to the top of the array
    const selectedImage = images[index];
    const updatedImages = [
      selectedImage,
      ...images.filter((_, i) => i !== index) // Filter out the selected image from other positions
    ];
    setCurrent(0); // Set the clicked image as the first image
    setImages(updatedImages); // Update the array of images
  };

  return (
    <>
      <section
        className="slideshow-container"
        style={{ backgroundImage: `url(${images[current]})`, backgroundColor: '#000' }}
      >
        {/* Left Content */}
        <div className="slideshow-content">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="slideshow-title">Pray for better life</h2>
          <p className="slideshow-description">
            The Prayer App helps you connect spiritually and find peace through prayers that align
            with your religion and personal beliefs. Select and explore prayers that bring comfort
            and strength to your daily life.
          </p>
          <button className="slideshow-btn">Get App</button>
        </div>

        {/* Thumbnail Images */}
        <div className="slideshow-thumbnails">
          <div className="slideshow-category">Christianity</div>
          <div className="thumbnail-grid">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-image ${index === current ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <ContainerHomepage   />
    </>
  );
};

export default HomePage;
