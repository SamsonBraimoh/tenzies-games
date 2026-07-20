import style from './gameWrapper.module.css'
import DiceWrapper from '../diceWrapper/diceWrapper'

export default function GameWrapper(){
    return(
        <>
            <section className={style.main}>
                <main className={style.gameContainer}>
                  <DiceWrapper />  
                </main>
            </section>
        </>
    )
}