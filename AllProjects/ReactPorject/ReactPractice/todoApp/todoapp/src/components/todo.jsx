// import { useState } from "react"

// export default function Todo(){
//     const [todo, setTodo]=useState("");
//     const [todos, setTodos] = useState([]);
//     function handleSubmit(e){
//         e.preventDefault();
//         setTodos([...todos,todo]);
//         console.log(todos);
//         setTodo("")
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
//                 <button type="submit">add</button>

//             </form>

//             {console.log(todos)}
//         </div>

//     )
// }


                     //displaying todos//
// import { useState } from "react"
// export default function Todo(){
//     const [todo, setTodo]=useState("");
//     const [todos, setTodos] = useState([]);
//     function handleSubmit(e){
//         e.preventDefault();
//         setTodos([...todos,todo]);
//         console.log(todos);
//         setTodo("")
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
//                 <button type="submit">add</button>

//             </form>

//             {todos.map(item =>(
//                 <div><h3>{item}</h3></div>
//             ))}
//         </div>

//     )
// }


import Form from "./frorm";
import { useState } from "react";
import Todolist from "./Todolist";
import Footer from "./Footer"
export default function Todo(){
    const [todos, setTodos] = useState([]);
    const completedTodo = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length
    return(
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <Todolist todos={todos} setTodos={setTodos} />
            <Footer completedTodos = {completedTodo} totalTodos={totalTodos}/> 
            
        </div>
    )
}