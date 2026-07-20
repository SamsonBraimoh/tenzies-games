import style from "./die.module.css"

export default function Die({value, isHeld}){
    return(
        <>
            <button className={`${style.die} ${isHeld ? style.held : style.notHeld}`}>{value}</button>
        </>
    )
}