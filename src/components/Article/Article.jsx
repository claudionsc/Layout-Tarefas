import React from 'react'

export const Article = () => {
  return (
    <article className='article'>
      <section>
        <h1>Lista de Tarefas</h1>
      </section>
      
      <section className='tarefas'>
        <span>
          <h2>Dia</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
          </ul>
        </span>
        
        <span>
          <h2>Noite</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
          </ul>
        </span>
      </section>
    </article>
  )
}
