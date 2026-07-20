import { useState } from "react"
import Die from "../die/die"
import style from "./diceWrapper.module.css"
import { nanoid } from "nanoid"

export default function DiceWrapper(){

    
    const generateAllNewDice = ()=>{
        // const dice = [];    
        // for(let i = 0; i < 10; i++) {
            //   const randomNumber = Math.floor(Math.random() * 6)
            //     dice.push(randomNumber)
            // }
            //    return dice 
     
        return new Array(10)
        .fill(0)
        .map( () => ({
            value: Math.floor(Math.random() * 6), 
            isHeld: true,
            id: nanoid()
        })
    )
    
}

const [newDice, setNewDice] = useState(generateAllNewDice())


const reRollDice = () => {
    setNewDice(generateAllNewDice())
}


const diceElement = newDice.map(dieObject => <Die key={dieObject.id} value={dieObject.value} isHeld={dieObject.isHeld} /> )

return(
        <>
        <div className={style.rollDice}> 
            <section className={style.diceContainer} >
            {diceElement}
            </section>
            <button className={style.button} onClick={reRollDice}>Roll</button>
        </div>
        </>
    )
}