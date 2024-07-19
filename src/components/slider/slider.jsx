
import { useState } from "react";
import "./slider.scss";



function Slider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbClick = (index) => {
    setCurrentImage(index+1);
  };

  return (
    <div className="slider">
      <div className="mainImage">
        <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((item, index) => (
          <img src={item} key={index} alt={`Thumbnail ${index}`} onClick={() => handleThumbClick(index)} className={currentImage === index ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
}

export default Slider;