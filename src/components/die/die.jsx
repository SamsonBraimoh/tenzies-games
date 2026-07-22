import style from "./die.module.css"

export default function Die({value, isHeld, hold}){
    return(
        <>
            <button 
            className={`${style.die} ${isHeld ? style.held : style.notHeld}`} 
            onClick={hold}>{value}</button>
        </>
    )
}