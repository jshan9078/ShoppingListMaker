import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Read = ({recipe}) => {

  
  return (
    <div className="Item">
        <h3>{recipe}</h3>
    </div>
    
  )
}
