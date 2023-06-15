import React, { useState, useRef } from 'react'
import { LuTrash2 } from 'react-icons/lu'

export const TarefasDia = () => {


  const [listaTarefasDia, setListaTarefasDia] = useState(() => { return localStorage.getItem("ListaDia") ? JSON.parse(localStorage.getItem("ListaDia")) : [] })
  const [tarefaDia, setTarefaDia] = useState(() => { return '' })
  const [horaDia, setHoraDia] = useState()

  localStorage.setItem("ListaDia", JSON.stringify(listaTarefasDia))

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
          tarefa: tarefaDia,
        }]
      })
      id.current++
    }
  }

  const deleteTarefa = (id) => {
    const del = listaTarefasDia.filter(tarefa => tarefa.id !== id)
    setListaTarefasDia(del)
  }

  const deletarTodasTarefas = () => {
    localStorage.setItem("ListaDia", [])
    setListaTarefasDia([])
  }


  return (
    <span>
      <h2>Dia</h2>
      <ol>
        {listaTarefasDia.map((item) => {

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
            min="05:00" max="18:00" required onChange={(e) => { setHoraDia(e.target.value) }} />
          <input type="text" placeholder='Adicionar tarefa' onChange={(e) => { setTarefaDia(e.target.value) }} required />
          <input className='form-btn' type="button" value="+" onClick={handleSubmit} />
        </form>

        <button onClick={() => deletarTodasTarefas()}>Excluir todas as tarefas</button>
      </ol>


    </span>
  )
}
