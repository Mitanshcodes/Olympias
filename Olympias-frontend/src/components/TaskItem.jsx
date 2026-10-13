export default function TaskItem({title, checkbox}) {
    return <p> {title} <input type = "checkbox" defaultChecked = {checkbox} /> </p> 
}
