import React, { useState, useRef } from 'react'
import { LuTrash2 } from 'react-icons/lu'

export const TarefasNoite = () => {


  const [listaTarefasNoite, setListaTarefasNoite] = useState(() => { return localStorage.getItem("ListaNoite") ? JSON.parse(localStorage.getItem("ListaNoite")) : [] })
  const [tarefaNoite, setTarefaNoite] = useState(() => { return '' })
  const [horaNoite, setHoraNoite] = useState()

  localStorage.setItem("ListaNoite", JSON.stringify(listaTarefasNoite))

  const id = useRef(0)

  const handleSubmit = () => {

    if (!tarefaNoite || !horaNoite) {
      return
    } else {
      setListaTarefasNoite(old => {
        return [...old,
        {
          id: id.current,
          hora: horaNoite,
          tarefa: tarefaNoite
        }]
      })

      id.current++
    }

  }

  const deleteTarefa = (id) => {
    const del = listaTarefasNoite.filter(tarefa => tarefa.id !== id)
    setListaTarefasNoite(del)
  }
  const deletarTodasTarefas = () => {
    localStorage.setItem("ListaNoite", [])
    setListaTarefasNoite([])

  }

  return (
    <span>
      <h2>Noite</h2>
      <ol>
        {listaTarefasNoite.map((item) => {

          return <>
            <li key={item.id} id={item.id}>
              <input type="checkbox" name={item.tarefa} id={item.tarefa} />
              <label htmlFor={item.tarefa}>{item.hora}: {item.tarefa}</label>
              <LuTrash2 onClick={() => { deleteTarefa(item.id) }} />
            </li>
          </>
        })}
        <form action="" method="submit" >
          <input type="time" className="hora" name="appt"
            min="18:00" max="05:00" required onChange={(e) => { setHoraNoite(e.target.value) }} />
          <input type="text" placeholder='Adicionar tarefa' onChange={(e) => { setTarefaNoite(e.target.value) }} required />
          <input className='form-btn' type="button" value="+" onClick={handleSubmit} />
        </form>
        <button onClick={() => deletarTodasTarefas()}>Excluir todas as tarefas</button>
      </ol>

    </span>
  )
}
