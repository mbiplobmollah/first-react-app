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
// export default function ToDo({task,isDone,time=0}){
    
//     if(isDone){
//         return <li>Done: {task} and duration: {time}</li>
        
//     }
//     return <li>To be done: {task}</li>
// }

// conditional rendering: 3 ternary 
// condition ? true : false


// export default function ToDo({task,isDone,time=0}){
//     return isDone ? 
//     <li>Done: {task} time: {time}</li> 
//     : <li>Not Done: {task}</li>
// }

// condition rendering : 4 optional && 
// condition rendering : 5 optional || 

// export default function ToDo({task,isDone,time=0}){
//     return isDone && <li>Done: {task} time: {time}</li>
    
// }

// export default function ToDo({task,isDone,time=0}){
//     return isDone || <li>Not Done: {task} time: {time}</li>
    
// }

// condition rendering : 6 optional use variable 

export default function ToDo({task,isDone, time}){

    // const displayTime = time ? time : 100;
    let listItem;

    if(isDone){
        listItem = <li>Done: {task} time: {time ? 'I am done' : 'I am not done'}</li>
        
    }
    else{
        listItem = <li>Pending: {task}</li>
    }
    return listItem;
}