import React, {  useRef, useState } from 'react'
import { TarefasDia } from './TarefasDia/TarefasDia'
import { TarefasNoite } from './TarefasNoite/TarefasNoite'

export const Article = () => {


  return (
    <article className='article'>
      <section>
        <h1>Lista de Tarefas</h1>
      </section>

      <section className='tarefas'>
        <TarefasDia />
        <TarefasNoite />
      </section>
    </article>
  )
}
