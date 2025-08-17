// export default function Todolist(props){
//     return <h3>{props.item}</h3>;

// }



// import styles from "./todoitem.module.css"
// export default function Todolist({item}){
//     function handleDelete(){
//         console.log("delete button click")
//     }
//     return <div className={styles.item}>
//                 <div className={styles.itemName}>{item} 
//                     <span>
//                         <button className={styles.deletebutton}>
//                             x
//                         </button>
//                     </span>
//                 </div>
        
//                 <hr className={styles.line} />
//             </div>
// }



// import styles from "./todoitem.module.css"
// export default function Todolist({item, todos, setTodos}){
//     function handleDelete(item){
//         console.log("delete button click", item);
//         todos.filter((todo) => todo !== item)
//     }
//     return <div className={styles.item}>
//                 <div className={styles.itemName}>{item} 
//                     <span>
//                         <button onClick={() => handleDelete(item)} className={styles.deletebutton}>
//                             x
//                         </button>
//                     </span>
//                 </div>
        
//                 <hr className={styles.line} />
//             </div>
// }

// import styles from "./todoitem.module.css"
// export default function Todolist({item, todos, setTodos}){
//     function handleDelete(item){
//         // console.log("delete button click", item);
//         setTodos(todos.filter((todo) => todo !== item));
//     }
//     function handleClick(name){
//         // console.log("item text clicked", name)
//         const newArray = todos.map((todo) => 
//             todo.name === name?{...todo,done : !todo.done} : todo)
//         setTodos(newArray)
//         console.log(todos)
//     }
//     const className = item.done ? styles.completed: ""
//     return <div className={styles.item}>
//                 <div className={styles.itemName}>
//                     <span className={className} onClick={() =>handleClick(item.name)}>
//                       {item.name}
//                     </span>
                     
//                     <span>
//                         <button onClick={() => handleDelete(item)} className={styles.deletebutton}>
//                             x
//                         </button>
//                     </span>
//                 </div>
//                 <hr className={styles.line} />
//             </div>
// }


import styles from "./todoitem.module.css"
export default function Todolist({item, todos, setTodos}){
    function handleDelete(item){
        // console.log("delete button click", item);
        setTodos(todos.filter((todo) => todo !== item));
    }
    function handleClick(name){
        // console.log("item text clicked", name)

        setTodos(todos.map((todo) => 
            todo.name === name?{...todo,done : !todo.done} : todo))
        console.log(todos)
    }
    const className = item.done ? styles.completed: ""
    return <div className={styles.item}>
                <div className={styles.itemName}>
                    <span className={className} onClick={() =>handleClick(item.name)}>
                      {item.name}
                    </span>
                     
                    <span>
                        <button onClick={() => handleDelete(item)} className={styles.deletebutton}>
                            x
                        </button>
                    </span>
                </div>
                <hr className={styles.line} />
            </div>
}