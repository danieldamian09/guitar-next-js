import React from 'react'

const Curso = ({curso}) => {

  const {titulo, contenido, imagen} = curso

  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>

          <a href="#">Más Información</a>
        </div>
      </div>
    </section>
  )
}

export default Curso