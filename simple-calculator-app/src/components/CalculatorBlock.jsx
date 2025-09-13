import React from 'react'
import "./calculatorBlock.css"
function CalculatorBlock() {
  return (
    <div className="calculator-block">
        <div className="result-display">
            <p className="result-tag">0</p>
        </div>
        
        <div className="buttons-1">
            <button className="ac-button all-clear">AC</button>
            <button className="open-brace operator">(</button>
            <button className="closed-brace operator">)</button>
            <button className="clear">C</button>
        </div>
        <div className="buttons-2">
            <button className="nine">9</button>
            <button className="eight">8</button>
            <button className="seven">7</button>
            <button className="operator div">/</button>
        </div>
        <div className="buttons-3">
            <button className="six">6</button>
            <button className="five">5</button>
            <button className="four">4</button>
            <button className="operator multiply">x</button>
        </div>
        <div className="buttons-4">
            <button className="three">3</button>
            <button className="two">2</button>
            <button className="one">1</button>
            <button className="operator minus">-</button>
        </div>
        <div className="buttons-5">
            <button className="zero">0</button>
            <button className="dot">.</button>
            <button className="equal">=</button>
            <button className="operator plus">+</button>
        </div>
    </div>
  )
}

export default CalculatorBlock