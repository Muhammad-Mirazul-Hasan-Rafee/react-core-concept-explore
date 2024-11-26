import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {


  return (
    <>
      {/* <Person></Person> */}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>



      {/* <Student grade='7' score='99'></Student> */}
    </>
  )
}

// function Person(){
//   const age = 25;
//   return <h3>I am a person with age: {age}</h3>
// }

// const {grade , score} = {grade: '7' , score: '99'};
// function Student({grade , score}){

//   return (

//     <div>
//       <h3>This is a Student</h3>
//       <p>
//         Class: {grade}
//       </p>
//       <p>
//         Score:{score}
//       </p>
//     </div>
//   )

// }

export default App
