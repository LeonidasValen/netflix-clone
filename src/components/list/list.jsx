import { useState, useRef } from "react";
import Slider from "react-slick";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './list.css'

import {ListItem} from '../listItem/listItem'
import { InfoContainer } from "../listItem/infoContainer";

export function List(){

  const settings = {
    dots: false,//muestra numero paginas
    infinite: false,//si el carrusel es infinito
    speed: 540, //velocidad de movimiento animacion
    slidesToShow: 6,//cuantas fotos muestra
    slidesToScroll: 6,//cuantos a desplasar
    initialSlide: 0, //en que numero iniciar
    draggable: false,  // desactiva el desplazamiento con el mouse
    //arrows: false, //desactiva las flechas
    nextArrow: <SampleNextArrow />,//genera tus propias flechas
    prevArrow: <SamplePrevArrow />,
    responsive: [//responsive carrousel
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  
  const [isInfoHover, setInfoHover] = useState(false);
  const [infoPosition, setInfoPosition] = useState({ top: 0, left: 0 });
  
  const mouseInfoEnter = (index, event) => {
    const { left, top } = event.target.getBoundingClientRect();
    const newPosition = calculateInfoPosition(left, top);
  
    setInfoPosition(newPosition);
    setInfoHover(true);
  };
  
  const calculateInfoPosition = (left, top) => {
    // Puedes ajustar la lógica según tus necesidades
    let newPosition = { left, top };
  
    // Ejemplo: Cambiar la posición según la resolución de la pantalla
    if (window.innerWidth < 600) {
      newPosition.left += 20;
    } else if (window.innerWidth < 1000) {
      newPosition.left -= 10;
    }
  
    // Ejemplo: Cambiar la posición según la posición Y del scroll
    const scrollY = window.scrollY || window.pageYOffset;
    newPosition.top += scrollY / 2;
  
    return newPosition;
  };
  
  const mouseInfoLeave = () => {
    setInfoHover(false);
  };
  
  return (

    <div className="list">
      <span className="listTitle">Continuar viendo</span>
      <div className="wrapper" onMouseLeave={mouseInfoLeave}>
        <Slider {...settings}>
          {Array(42).fill(null).map((_, index) => (
            <div key={`items${index}`} className="container" onMouseEnter={(event) => mouseInfoEnter(index, event)}>
              {ListItem[index % ListItem.length]}
            </div>
          ))}
        </Slider>
          {isInfoHover && <InfoContainer style={infoPosition} />}
      </div>
    </div>
  );
}


function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='sliderArrow left' onClick={onClick}>
      <img  src="./icons/flecha-izquierda.png" alt="" />
    </div>
  );
}

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div className='sliderArrow right' onClick={onClick}>
      <img src="./icons/flecha-derecha.png" alt="" />
    </div>
  );
}




