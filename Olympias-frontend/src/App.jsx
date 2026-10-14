import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TaskList from "./components/TaskList.jsx";
import TaskItem from './components/TaskItem.jsx'

function App() {

  const [tasks, setTasks] = useState([
    {id : 1, title: 'CS P2', done: true},
    {id : 2, title: 'MATH240', done: false},
    {id : 3, title: 'Olympias', done: false}
  ])

  return (
    <div>
    <h1>  Olympias </h1>
      {tasks.length ===0 ? <p> No tasks </p> :
      <TaskList tasks = {tasks}/>
      }
    </div>
  )
}

export default App
