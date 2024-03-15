import { useState,useEffect} from "react";
import Slider from "react-slick";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './list.css'

import {ListItem} from '../listItem/listItem'

import { fetchMovies } from '../../api/movies.js'

export function List({title}){

  //trae las peliculas
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies().then(data => {
      setMovieList(data);//guarda los datos tridos de la api
      generateRandom(data.length)//obiente la cantidad de arrays de la api

    }).catch(error => {//error al traer la api
      console.error('Error fetching movies:', error);
    });
  }, []);

  //random peliculas
  const [randomMovies, setRandomMovies] = useState([])

  const generateRandom = (length) =>{
    const indices = [];
    while(indices.length < length){//genera un bucle hasta que el indice tenga la misma cantidad de arreglos que el paramentro
      const randomMovie = Math.floor(Math.random() * length)//genera numeros aleatorios
      if(!indices.includes(randomMovie)){//evita la repeticion de pelis de arrays verificando atraves del include
        indices.push(randomMovie)//se añade el array que no este incluido
      }
    }
    setRandomMovies(indices)//almacena las pelis generado aleatoriamente
  }

  
  //slider
  const [isInfinite, setIsInfinite] = useState(false);
  
  const toggleInfiniteWithDelay = () => {
    setTimeout(() => {
      setIsInfinite(true);
    }, 541);
  };

  const settings = {
    dots: false,//muestra numero paginas
    infinite: isInfinite,//si el carrusel es infinito
    speed: 540, //velocidad de movimiento animacion
    slidesToShow: 6,//cuantas fotos muestra
    slidesToScroll: 6,//cuantos a desplasar
    initialSlide: 0, //en que numero iniciar
    draggable: false,  // desactiva el desplazamiento con el mouse
    //arrows: false, //desactiva las flechas
    nextArrow: <SampleNextArrow toggleInfinite={toggleInfiniteWithDelay} />,//genera tus propias flechas
    prevArrow: <SamplePrevArrow />,
    responsive: [//responsive carrousel
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0
        }
      }
    ]
  };
  
  return (
    <>
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper" >
      <Slider {...settings}>
            {randomMovies.map((movie, index) => (
              <div key={`item${index}`} className="container">
                <ListItem
                  key={`item${index}`}
                  title={movieList[movie].title}
                  age={movieList[movie].age}
                  duration={movieList[movie].duration}
                  categories={movieList[movie].categories}
                  coverImage={movieList[movie].coverImage}
                  description={movieList[movie].description}
                  year={movieList[movie].year}
                />
              </div>
            ))}
          </Slider>
        {/* <Slider {...settings}>
            {Array(42).fill(null).map((_, index) => (
              <div key={`items${index}`} className="container">
                <ListItem key={`item${index}`} />
              </div>
            ))}
          </Slider> */}
      </div>
    </div>
    </>
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
  const {onClick, toggleInfinite  } = props;
  return (
    <div className='sliderArrow right' onClick={() => {onClick(); toggleInfinite();}}>
      <img src="./icons/flecha-derecha.png" alt="" />
    </div>
  );
}

