import React, { useState } from 'react'
import "./calculatorBlock.css"
function CalculatorBlock() {
    const [operations, setOperations] = useState("0");
    const [answer, setAnswer] = useState("")
    function CalculateOperation(){
        try {
            let calculateOpera=operations
            calculateOpera=calculateOpera.split("x").join("*")
            calculateOpera=calculateOpera.split("(")
            let resultArray=[]

            for(let i=0;i<calculateOpera.length-1;i++){
                let op="+-*/"
                if(op.includes(calculateOpera[i][calculateOpera[i].length-1])){
                    resultArray.push(calculateOpera[i]+"(")
                }else{
                    resultArray.push(calculateOpera[i]+"*(")
                }
                
            }

            resultArray.push(calculateOpera[calculateOpera.length-1])
            calculateOpera=resultArray.join("")
            calculateOpera=calculateOpera.split(")")
            resultArray=[]
            for(let i=0;i<calculateOpera.length;i++){
                let op="+-*/"
                if(i==0){
                    resultArray.push(calculateOpera[0])
                }else if(op.includes(calculateOpera[i][0])){
                    resultArray.push(")"+calculateOpera[i])
                }else{
                    resultArray.push(")*"+calculateOpera[i])
                }
                
            }
            calculateOpera = resultArray.join("")
            // console.log(calculateOpera)
            let result = eval(calculateOpera)
            
            if (String(result) !== "Infinity" && String(result) !== "-Infinity") {
                result = result.toFixed(2)
            }

            setAnswer(String(result))
            setOperations(String(result))
            
            
        } catch (error) {
            setAnswer("invalid input")
            setOperations("invalid input")
            console.log(error.message)
            
        }
        

    }
    function HandleAddOperations(event) {
        setOperations(operations === "0" ? `${event}` : `${operations}${event}`)
    }
    function HandleClear(event) {
        if (event === "C") {
            if (operations.length === 1 || answer === operations) {
                setOperations("0")
            } else {
                let splitArray = operations.split("")
                splitArray.pop()
                let finalResult = splitArray.join("")
                setOperations(finalResult)
            }
            
        } else {
            setOperations("0")
        }
    }
  return (
    <div className="calculator-block">
        <div className="result-display">
              <p className="answer-tag">{operations} </p>
        </div>
        
        <div className="buttons-1">
            <button onClick={(e)=>HandleClear(e.target.textContent)} className="ac-button all-clear">AC</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="open-brace operator">(</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="closed-brace operator">)</button>
            <button onClick={(e)=>HandleClear(e.target.textContent)} className="clear">C</button>
        </div>
        <div className="buttons-2">
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="nine">9</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="eight">8</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="seven">7</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="operator div">/</button>
        </div>
        <div className="buttons-3">
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="six">6</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="five">5</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="four">4</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="operator multiply">x</button>
        </div>
        <div className="buttons-4">
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="three">3</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="two">2</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="one">1</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="operator minus">-</button>
        </div>
        <div className="buttons-5">
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="zero">0</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="dot">.</button>
            <button onClick={ CalculateOperation} className="equal">=</button>
            <button onClick={(e)=>HandleAddOperations(e.target.textContent)} className="operator plus">+</button>
        </div>
    </div>
    )
}

export default CalculatorBlock