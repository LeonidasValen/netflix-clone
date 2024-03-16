import { useModal } from "../../context/modalContext"; // Importar el hook del contexto

import './modal.css'

export function Modal(){

    const { modalContent, closeModal } = useModal(); // Obtener el estado del modal y la función para cerrarlo

    if (!modalContent) return null; // Si no hay contenido en el modal, no se muestra

    const { title, age, duration, categories, coverImage, description, year } = modalContent; // Obtener los datos de la película del estado del modal

    return(
    <div className="preview-modal">
        <div className="background-modal" onClick={closeModal}></div>
        <div className="detail-modal">

            <div className="header-modal">
                <div className="img-modal"><img src={coverImage} alt={title} /></div>
                <div className="btn-header">
                    <div className="btn-header-container">
                        <a className="reproductor"><button><img src="./icons/tocar.png" alt="" />Reporducir</button></a>
                        <button className="btn-control"><img src="./icons/plus.png" alt="" /></button>
                        <button className="btn-control"><img src="./icons/me-gusta.png" alt="" /></button>
                    </div>
                </div>
                <button className="modal-close" onClick={closeModal}>X</button>
            </div>

            <div className="detail-container">
                <div className="data-container">
                    <div className="detail-data">
                        <div className="meta-data">
                            <div className="firt-data">
                                <span className='data-year'>{year}</span>
                                <span className='data-duration'>{duration}</span>
                                <span className='data-number'>{age}</span>
                            </div>
                            <div className="second-data">
                                <span className='data-categories'>{categories.join(', ')}</span>
                            </div>
                        </div>
                        <div className="description-data">
                            <span className="description-modal">{description}</span>
                        </div>
                    </div>
                    <div className="detail-info">
                        <div className="info-tags">
                            <span>Elenco:</span>
                        </div>
                        <div className="info-tags">
                            <span>Géneros:</span>
                        </div>
                        <div className="info-tags">
                            <span>Este título es:</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
