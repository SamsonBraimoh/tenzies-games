import style from './gameWrapper.module.css'
import DiceWrapper from '../diceWrapper/diceWrapper'

export default function GameWrapper(){
    return(
        <>
            <section className={style.main}>
                <main className={style.gameContainer}>
                  <header className={style.gameHeading}>
                        <h1>Tenzies</h1>
                        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                 </header>  
                  <DiceWrapper />  
                </main>
            </section>
        </>
    )
}