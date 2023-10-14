import React, {useState} from 'react'
import {Form} from './Form'
import {v4 as uuidv4} from 'uuid';
import {Item} from './Item';
import { BrowserRouter,Routes,Route,useNavigate, useLocation } from 'react-router-dom';
uuidv4();


export const FormWrapper = () => {
    let navigate = useNavigate(); 
    const [items,setItems] = useState([]);

    const addItem = item =>{
        setItems([...items, {id:uuidv4(), task: item, completed: false, isEditing:false}])
    }

    const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

    const getRecipe = () =>{
        console.log("debug");
        navigate(`/recipe`,{state:{ingredients:items}});
    }

  return (
    <div className='FormWrapper'>
        <h1>List ingredients you have!</h1>
        <Form addItem={addItem}/>
        {items.map((item,index) =>(
            <Item task={item} key={index} deleteItem={deleteItem} 
            />
        ))}
        <button id="confirmButton" onClick={()=>getRecipe()}>Get a Recipe!</button>
    </div>
  )
}
