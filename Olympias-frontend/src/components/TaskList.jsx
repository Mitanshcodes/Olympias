import TaskItem from './TaskItem.jsx'

export default function TaskList({tasks, toggleDone, onDelete}) {
    return (
        <div> 
            {tasks.map( task => (<TaskItem key = {task.id} id = {task.id} title = {task.title} checkbox = {task.done} toggleDone = {toggleDone}
                                 className = {task.done ? 'task-done' : 'task-undone'} onDelete = {onDelete} />))}
        </div>
    )
}

