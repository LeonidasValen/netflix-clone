import './infoContainer.css'

export const InfoContainer = ({ style }) => (
    <section className='itemInfoConatiner'style={style}>
        <div className='itemInfo'  >
            <div className='portadaInfo'><img src="./img/godofwar.png" alt="" /></div>

                <div className='itemInfoBottom'>
                    <div className='icons'>
                        <div className='sectionInfo'>
                            <button className='btnInfo'><img src="./icons/tocar.png" alt="" /></button>
                            <button className='btnInfo'><img src="./icons/plus.png" alt="" /></button>
                            <button className='btnInfo'><img src="./icons/me-gusta.png" alt="" /></button>
                        </div>
                      <button className='btnInfo'><img src="./icons/flecha-derecha.png" alt="" style={{transform:'rotate(90deg)',}}/></button>
                    </div>

                    <div className='infoBottom'>
                        <span>+16</span>
                        <span>1 h 14 min</span>
                        <div className=''>
                          <ul>
                            <li>Acción</li>
                          </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
  