import React,{useState,useEffect} from 'react';
import './App.css';
import { CharacterComponent } from "../src/CharacterComponent"
import axios from "axios"
import ReactDOM from "react-dom";

export const Characters = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character,setCharacter] = useState([]);
  useEffect( () => {
    axios.get("https://swapi.co/api/people")
    .then(response => response.json())
    .then(res => setCharacter(res.data.results) )
  },[])

(console.log(character))
  return (
    <>
    <div>
    {character.map((element,index) => <CharacterComponent id={element} key={index} />)}
    </div>
    </>
  )
    
  
}


