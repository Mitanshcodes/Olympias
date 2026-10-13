import TaskItem from './TaskItem.jsx'

export default function TaskList() {
    return (
        <div> 
            <TaskItem title = "CS P2" checkbox = {false} />
            <TaskItem title = "Math240" checkbox = {true}/>
            <TaskItem title = "Olympias" checkbox = {false} />
        </div>
    )
}