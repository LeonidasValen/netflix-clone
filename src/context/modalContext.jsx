import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) =>{

    //guarda la informacion, por defecto viene nulo o vacio
    const [modalContent, setModalContent] = useState(null)

    //al abrir el modal le pasa el contenido
    const openModal = (content) =>setModalContent(content)
    //al cerrar el modal borra la informacion
    const closeModal = () =>setModalContent(null)

    return(
        <ModalContext.Provider value={{modalContent, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

// import React, { createContext, useContext, useState } from 'react';

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (content) => setModalContent(content);
//   const closeModal = () => setModalContent(null);

//   return (
//     <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);


