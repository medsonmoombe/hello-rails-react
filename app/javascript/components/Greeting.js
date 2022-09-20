import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from '../store/GreetingsReducer';

const Greeting = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchGreetings())
  },[])

  const hundleGreetings = () => {
    dispatch(fetchGreetings())
  }

  const { greeting, loading, error } = useSelector((state) => state.greetings)

  return (
    <>
    <p>{greeting}</p>
    <button onClick={hundleGreetings}>Random Greeting</button>
    </>
  )
}

export default Greeting;