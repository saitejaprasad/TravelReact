// export default function InlineComponent(){
//     return (
//         <div><h1 style={{color:'blue',fontSize:"140px"}}>inline</h1></div>
//     )
// }



// const header = {color:'blue',fontSize:"140px"}
// export default function InlineComponent(){
//     return (
//         <div><h1 style={header}>inline</h1></div>
//     )
// }


import styles from "./inlinecomponent.module.css";
export default function InlineComponent(){
    return (
        <h1 className={styles.header}>inline</h1>
    );
}