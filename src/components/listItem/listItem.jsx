// import { useState } from 'react'

import { useModal } from '../../context/modalContext'
import './listItem.css'

export function ListItem({ title, age, duration, categories, coverImage, description, year }) {

  const{openModal} = useModal();//abre el modal

  const handleOpenModal = () => {
    // Llama a openModal con los datos de la película
    openModal({ title, age, duration, categories, coverImage, description, year});
  };
  return (
    <div className='listItem' onClick={handleOpenModal}>
      <div className='img-modal'>
        <img className='portadaItem' src={coverImage} alt={title} />
      </div>

      <div className='info-modal'>
        <div className='buttons-modal'>
          <div className='firts-btn'>
            <button><a href="#"><img src="./icons/tocar.png" alt="Play" /></a></button>
            <button><div><img src="./icons/me-gusta.png" alt="Me gusta" /></div></button>
            <button><div><img src="./icons/plus.png" alt="Agregar a favoritos" /></div></button>
          </div>
          <div className='second-btn'>
            <button><div><img src="./icons/flecha-derecha.png" alt="Siguiente" onClick={handleOpenModal}/></div></button>
          </div>
        </div>
        <div className='data-modal'>
          <span className='data-number'>{age}</span>
          <span className='data-duration'>{duration}</span>
        </div>
        <div className='category-modal'>
          {categories.map((category, index) => (
            <div className='category' key={`category${index}`}><span>{category}</span></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// export function ListItem({ title, age, duration, categories, coverImage }) {
//   return(
//   <div className='listItem' >
    
//     <div className='img-modal'>
//       <img className='portadaItem' src="./img/godofwar.png" alt="" />
//     </div>

//     <div className='info-modal'>
     
//         <div className='buttons-modal'>
//           <div className='firts-btn'>
//             <button><a href="#"><img src="./icons/tocar.png" alt="" /></a></button>
//             <button><div><img src="./icons/me-gusta.png" alt="" /></div></button>
//             <button><div><img src="./icons/plus.png" alt="" /></div></button>
//           </div>
//           <div className='second-btn'>
//             <button><div><img src="./icons/flecha-derecha.png" alt="" /></div></button>
//           </div>
//         </div>
//         <div className='data-modal'>
//           <span className='data-number'>+16</span>
//           <span className='data-duration'>1h 30min</span>
//         </div>
//         <div className='category-modal'>
//           <div className='category'><span>Gore</span></div>
//           <div className='category'><span>Macabro</span></div>
//           <div className='category'><span>Violento</span></div>
//         </div>
      
//     </div>
    
//   </div>
//   )
//}