import { useState,useEffect} from 'react';
import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import {Read} from '../components/Read'




function Recipe(){
    const[element,setElement]=useState([])
    const [ready,setReady] = useState(false);
    const location = useLocation();

    const load = async(str) =>{
        const response = await fetch(`https://thrifty-7nrxlzoyjq-uc.a.run.app/recipe/${str}`);
        const data = await response.json();
        console.log(data);
        setReady(true);
        setElement( <Read recipe={data}/>)
    }
    useEffect(()=>{
        let str="";
        for(let i=0;i<location.state.ingredients.length;i++){
            str = str.concat(", ", location.state.ingredients[i].task);
        }
        console.log(str);
        load(str);
    },[])

    return  (
        <div id="recipe">
            {ready ? element : <h1 id="loadingText">Loading Recipe...</h1>}
        </div>
    ) 

}

export default Recipe;