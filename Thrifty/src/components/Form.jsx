import React, {useState} from 'react'
import '../App.css';

export const Form = ({addItem}) => {
    const [value,setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        addItem(value);
        setValue("");
    }

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <input type="text" className='item-input' value={value} placeholder='Enter Grocery Item' onChange={(e)=>{setValue(e.target.value)}}/>
        <button type="submit" className='item-btn'>Add Item</button>
    </form>
  )
}
