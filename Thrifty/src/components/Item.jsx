import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Item = ({task, deleteItem}) => {

  
 
  return (
    <div className="Item">
        <p>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(task.id)}/>
        </div>

    </div>
    
  )
}
