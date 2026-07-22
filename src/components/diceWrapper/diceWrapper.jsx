import { useState, useRef, useEffect } from "react"
import Die from "../die/die"
import style from "./diceWrapper.module.css"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function DiceWrapper(){

    const buttonRef = useRef(null)
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
            isHeld: false,
            id: nanoid()
        })
    )
    
}

const [newDice, setNewDice] = useState(generateAllNewDice())


const reRollDice = () => {
    if (!gameWon){
        setNewDice(oldDice => oldDice.map(die => 
            die.isHeld ? 
                die : 
            {...die,  value: Math.floor(Math.random() * 6)}
        ))
    }else{
        setNewDice(generateAllNewDice())
    }
}

const hold = (id) => {
    setNewDice(oldDice => oldDice.map(die =>
        die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))  
}

const diceElement = newDice.map(dieObject => <Die 
    key={dieObject.id} 
    value={dieObject.value} 
    isHeld={dieObject.isHeld} 
    hold={()=> hold(dieObject.id)} 
    /> 
)
const gameWon = newDice.every(die => die.isHeld) && newDice.every(die => die.value === newDice[0].value)
 
useEffect(()=> {if(gameWon){
    buttonRef.current.focus()
}},
[gameWon]
)



return(
        <>
            {gameWon && <Confetti />}
        
        <div className={style.rollDice}> 
            <section className={style.diceContainer} >
            {diceElement}
            </section>
            <button ref={buttonRef} className={style.button} onClick={reRollDice}>{ gameWon ? "New Game" : "Roll"}</button>
        </div>
        </>
    )
}