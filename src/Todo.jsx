// export default function ToDo({task}){
    
//     return (
//         <li>Task: {task}</li>
//     )
// }


// export default function ToDo({task,isDone}){
//     if(isDone){
//         return <li>Done: {task}</li>
        
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }
export default function ToDo({task,isDone,time=0}){
    
    if(isDone){
        return <li>Done: {task} and duration: {time}</li>
        
    }
    return <li>To be done: {task}</li>
}