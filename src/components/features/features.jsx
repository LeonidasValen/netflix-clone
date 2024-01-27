import './features.css'

export function Features({type}) {

  return (
    <div className='featured'>
        {type &&(
            <div className='category'>
                {/* <span>{type === "movie" ? "Movies" : "Series"}</span> */}
                <select name="genre" id="genre">
                    <option>Género</option>
                    <option value="adventure">Adventura</option>
                    <option value="comedy">Comedia</option>
                    <option value="Crime">Crimenes</option>
                    <option value="fantasy">Fantasia</option>
                    <option value="historiacal">Historico</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Ciencia ficcion</option>
                    <option value="thriller">Suspenso</option>
                    <option value="western">Occidental</option>
                    <option value="animation">Animación</option>
                    <option value="drama">Drama</option>
                    <option value="documentari">Documentales</option>
                </select>
            </div>
        )}
        <img className='poster' src="img/godofwar.png" alt="" />

        <div className='info'>
            <img className='portada' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92554480-bde6-4f5c-9861-7022237da1ce/dfk2tpx-65d27247-cc75-48e8-b47a-036ca25e70d6.png/v1/fill/w_1024,h_265/god_of_war_lll_logo_by_brsbr_dfk2tpx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvOTI1NTQ0ODAtYmRlNi00ZjVjLTk4NjEtNzAyMjIzN2RhMWNlXC9kZmsydHB4LTY1ZDI3MjQ3LWNjNzUtNDhlOC1iNDdhLTAzNmNhMjVlNzBkNi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.l49RjuKjwj8Ewc0In9pvN-jWAq0JFD86xdO_wu_3e5s" alt="" />
            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti debitis ex obcaecati dolorum nihil quae modi dolores nostrum esse a odit cum officiis, repellendus optio voluptas maiores? Molestiae, placeat.
            </span>
            <div className='buttons'>
                <button className='play'>
                    <img src="./icons/tocar.png" alt="" /><span>Reproducir</span>
                </button>
                <button className='more'>
                    <img src="./icons/informacion.png" alt="" /><span>Más información</span>
                </button>
            </div>
        </div>

    </div>
  )
}
