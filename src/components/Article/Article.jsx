import React, {  useRef, useState } from 'react'
import { LuTrash2 } from 'react-icons/lu'

export const Article = () => {

  let [listaTarefasDia, setListaTarefasDia] = useState(() => { return [] })
  const [tarefaDia, setTarefaDia] = useState(() => { return '' })
  const [horaDia, setHoraDia] = useState()

  const id = useRef(0)

  const handleSubmit = () => {

    if (!tarefaDia || !horaDia) {
      return
    } else {
      setListaTarefasDia(old => {
        return [...old,
        {
          id: id.current,
          hora: horaDia,
          tarefa: tarefaDia
        }]
      })

      id.current++
    }

  }

  const deleteTarefa = (id) => {
    const del = listaTarefasDia.filter(tarefa => tarefa.id !== id)
    setListaTarefasDia(del)
  }

  return (
    <article className='article'>
      <section>
        <h1>Lista de Tarefas</h1>
      </section>

      <section className='tarefas'>
        <span>
          <h2>Dia</h2>
          <ul>
            {listaTarefasDia.map((item) => {

              return <>
                        <li key={item.id} id={item.id}>{item.hora}: {item.tarefa}</li>
                        <LuTrash2 onClick={() => { deleteTarefa(item.id) }} />
                    </>
            })}
            <form action="" method="submit" >
              <input type="time" className="hora" name="appt"
                min="05:00" max="18:00" required onChange={(e) => { setHoraDia(e.target.value) }} />
              <input type="text" placeholder='Adicionar tarefa' onChange={(e) => { setTarefaDia(e.target.value) }} required />
              <input className='form-btn' type="button" value="+" onClick={handleSubmit} />
            </form>

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
