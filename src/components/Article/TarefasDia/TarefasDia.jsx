import React, {useState, useRef} from 'react'
import { LuTrash2 } from 'react-icons/lu'
import { GrFormCheckmark } from 'react-icons/gr'


export const TarefasDia = () => {

    
  const [listaTarefasDia, setListaTarefasDia] = useState(() => { return  localStorage.getItem("ListaDia") ? JSON.parse(localStorage.getItem("ListaDia")) : [] })
  const [tarefaDia, setTarefaDia] = useState(() => { return '' })
  const [horaDia, setHoraDia] = useState()

  const [tarefaRealizada, setTarefaRealizada] = useState(localStorage.getItem("TarefaRealizadaDia") ? JSON.parse(localStorage.getItem("TarefaRealizadaDia")) : false)

  localStorage.setItem("TarefaRealizadaDia", JSON.stringify(tarefaRealizada))

  
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
          tarefa: tarefaDia
        }]
      })

      id.current++
    }


  }

  const deleteTarefa = (id) => {
    const del = listaTarefasDia.filter(tarefa => tarefa.id !== id)
    setListaTarefasDia(del)
    setTarefaRealizada(false)
  }
    
  return (
    <span>
          <h2>Dia</h2>
          <ul>
            {listaTarefasDia.map((item) => {

              return <>
                        <li className={`${tarefaRealizada}`} key={item.id} id={item.id}>{item.hora}: {item.tarefa}</li>
                        <LuTrash2 onClick={() => { deleteTarefa(item.id) }} />
                        <GrFormCheckmark onClick={() => setTarefaRealizada(true)} />
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
  )
}
