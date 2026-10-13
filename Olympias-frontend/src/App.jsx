import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TaskList from "./components/TaskList.jsx";

function App() {

  return (
    <div>
    <h1>  Olympias </h1>
    
      <TaskList />
    
    </div>
  )
}

export default App
