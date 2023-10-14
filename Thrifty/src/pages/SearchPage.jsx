import { useState,useEffect} from 'react';
import React from 'react';
import { BrowserRouter,Routes,Route,useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import {FormWrapper} from '../components/FormWrapper'




function SearchPage(){


    return  (
        <div id="searchpage">
            <h1 id = "mainName">Thrifty</h1>
            <FormWrapper/>
        </div>
    ) 

}

export default SearchPage;