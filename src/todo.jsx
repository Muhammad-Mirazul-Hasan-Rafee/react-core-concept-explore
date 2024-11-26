// export default function Todo(props , isDone){
    
//     return(
//         <li>Task: {task}</li>
//     )
// }

//  conditional rendering option 1 
// export default function Todo(props , isDone){
    
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work On: {task}</li>

//     }
// }
export default function Todo(props , isDone){
    
    if(isDone){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work On: {task}</li>

    }
}
