import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from '../store/GreetingsReducer';

const Greeting = () => {

  const { greeting } = useSelector((state)=> state.greetings);
  return (
    <>
    <p>{greeting}</p>
    <button>Random Greeting</button>
    </>
  )
}

export default Greeting;