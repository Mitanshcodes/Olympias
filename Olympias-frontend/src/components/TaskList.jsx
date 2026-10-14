import TaskItem from './TaskItem.jsx'

export default function TaskList({tasks}) {
    return (
        <div> 
            {tasks.map( task => (<TaskItem key = {task.id} title = {task.title} checkbox = {task.done} />))}
        </div>
    )
}