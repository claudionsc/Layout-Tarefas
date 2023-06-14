import React, {useState, useRef} from 'react'
import { LuTrash2 } from 'react-icons/lu'
import { GrFormCheckmark } from 'react-icons/gr'

export const TarefasNoite = () => {

    
  const [listaTarefasNoite, setListaTarefasNoite] = useState(() => { return  localStorage.getItem("ListaNoite") ? JSON.parse(localStorage.getItem("ListaNoite")) : [] })
  const [tarefaNoite, setTarefaNoite] = useState(() => { return '' })
  const [horaNoite, setHoraNoite] = useState()

  const [tarefaRealizada, setTarefaRealizada] = useState(localStorage.getItem("TarefaRealizadaNoite") ? JSON.parse(localStorage.getItem("TarefaRealizadaNoite")) : false)

  localStorage.setItem("TarefaRealizadaNoite", JSON.stringify(tarefaRealizada))
  
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
    setTarefaRealizada(false)
  }
    
  return (
    <span>
          <h2>Noite</h2>
          <ul>
            {listaTarefasNoite.map((item) => {

              return <>
                        <li className={`${tarefaRealizada}`} key={item.id} id={item.id}>{item.hora}: {item.tarefa}</li>
                        <LuTrash2 onClick={() => { deleteTarefa(item.id) }} />
                        <GrFormCheckmark onClick={() => setTarefaRealizada(true)} />
                    </>
            })}
            <form action="" method="submit" >
              <input type="time" className="hora" name="appt"
                min="18:00" max="05:00" required onChange={(e) => { setHoraNoite(e.target.value) }} />
              <input type="text" placeholder='Adicionar tarefa' onChange={(e) => { setTarefaNoite(e.target.value) }} required />
              <input className='form-btn' type="button" value="+" onClick={handleSubmit} />
            </form>

          </ul>
        </span>
  )
}
