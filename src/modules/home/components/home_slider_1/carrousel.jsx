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
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='icon_rotate icon-carousel' viewBox="0 0 16 16">
  <path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L6.707 9Z"/>
</svg>
      </button>
      <button onClick={goToNextSlide} className="button_carousel mr-2 bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-110 hover:brightness-90">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='icon-carousel' viewBox="0 0 16 16">
  <path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L6.707 9Z"/>
</svg>
      </button>
    </div>
    
  );
}

export default Carrusel;