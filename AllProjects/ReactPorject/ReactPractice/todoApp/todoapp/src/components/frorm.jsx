// import { useState } from "react";
// import styles from "./form.module.css";

// export default function Form({todos, setTodos}){
//    // const [todo, setTodo]=useState("");
//     const [todo, setTodo]=useState(" ");
    
//     function handleSubmit(e){
//         e.preventDefault();
//         setTodos([...todos,todo]);
//         console.log(todos);
//         setTodo("")
//     }
//     return(
//         <form className={styles.todoform} onSubmit={handleSubmit}>
//             <div className={styles.inputContainer}>
//                 <input className={styles.mordernInput}onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="enter todolist"/>
//                 <button className={styles.mordernButton} type="submit">add</button>

//             </div>
//         </form>
//     )
// }


import { useState } from "react";
import styles from "./form.module.css";

export default function Form({todos, setTodos}){
   // const [todo, setTodo]=useState("");
    const [todo, setTodo]=useState({name:"", done: false });
    
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        console.log(todos);
        setTodo({name:"", done: false });
    }
    return(
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.mordernInput}
                    onChange={(e) => setTodo({name:e.target.value, done: false })} 
                    value={todo.name} type="text" placeholder="enter todolist"/>
                    <button className={styles.mordernButton} type="submit">
                        add 
                    </button>

            </div>
        </form>
    )
}