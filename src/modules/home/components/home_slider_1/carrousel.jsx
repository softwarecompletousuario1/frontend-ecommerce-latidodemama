import React, {useState, useEffect} from 'react';
import '../../styles/carousel_home_slider_1.css';


const imagenes = [ 
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698941126/carrusel/Latido_de_mam%C3%A1_1_veaa2n.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698941257/carrusel/Latido_de_mam%C3%A1_2_qgtevf.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698941405/carrusel/Latido_de_mam%C3%A1_3_yctxfw.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698941525/carrusel/Latido_de_mam%C3%A1_4_burj3e.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698941817/carrusel/Latido_de_mam%C3%A1_5_vxkqdp.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698942166/carrusel/Latido_de_mam%C3%A1_7_mlduoo.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698942825/carrusel/Latido_de_mam%C3%A1_9_jen9nh.webp",
  "https://res.cloudinary.com/dk2abyon6/image/upload/v1698943032/carrusel/Latido_de_mam%C3%A1_10_ozke07.webp"
];

function Carrusel() {

  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * imagenes.length));

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval); 
  }, [currentImageIndex]);

  return (
    <div className="carousel" style={{ backgroundImage: `url(${imagenes[currentImageIndex]})` }}>
      <button onClick={goToPreviousSlide}  className="button_carousel ml-2 bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-110 hover:brightness-90">
        <svg className='icon-carousel' xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </button>
      <button onClick={goToNextSlide} className="button_carousel mr-2 bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-110 hover:brightness-90">
      <svg className='icon-carousel' xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
      </button>
    </div>
    
  );
}

export default Carrusel;