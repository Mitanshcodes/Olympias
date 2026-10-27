export default function TaskItem({id, title, checkbox, toggleDone, className, onDelete}) {
    return <p className = {className}>  {title} <input type = "checkbox" checked = {checkbox} onChange={() => toggleDone(id)}/> 
    <button type = "button" onClick={() => onDelete(id)}> Delete </button> </p> 
}
