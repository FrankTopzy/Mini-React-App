import { useEffect, useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [input, setInput] = useState(localStorage.getItem("input") || "")

  function buttons(value) {
    if (input === undefined) {
      setInput("");
    }
    
    setInput(prev => prev + value)
  }

  function saveData() {
    localStorage.setItem("input", input)
  }

  useEffect(() => {
    saveData();
  }, [input])

  const handleCalculation = () => {
    setInput(new Function('return ' + input)())
  }

  return (
    <div className='container'>
      <div className="calculator">
        <div>
          <input type="text" className='input' value={input ?? ""} readOnly/>
        </div>

        <div>
          <button className="number" onClick={() => setInput("")}>AC</button>
          <button className="number" onClick={() => setInput(input.slice(0, -1))}>DE</button> 
          <button className="number" value={"."} onClick={(e) => buttons(e.target.value)}>.</button> 
          <button className="operator" value={"/"} onClick={(e) => buttons(e.target.value)}>/</button>
        </div>

        <div>
          <button className="number" value={"1"} onClick={(e) => buttons(e.target.value)}>1</button>
          <button className="number" value={"2"} onClick={(e) => buttons(e.target.value)}>2</button> 
          <button className="number" value={"3"} onClick={(e) => buttons(e.target.value)}>3</button> 
          <button className="operator" value={"+"} onClick={(e) => buttons(e.target.value)}>+</button>
        </div>

        <div>
          <button className="number" value={"4"} onClick={(e) => buttons(e.target.value)}>4</button> 
          <button className="number" value={"5"} onClick={(e) => buttons(e.target.value)}>5</button> 
          <button className="number" value={"6"} onClick={(e) => buttons(e.target.value)}>6</button> 
          <button className="operator" value={"-"} onClick={(e) => buttons(e.target.value)}>-</button>
        </div>
        
        <div>
          <button className="number" value={"7"} onClick={(e) => buttons(e.target.value)}>7</button> 
          <button className="number" value={"8"} onClick={(e) => buttons(e.target.value)}>8</button> 
          <button className="number" value={"9"} onClick={(e) => buttons(e.target.value)}>9</button> 
          <button className="operator" value={"*"} onClick={(e) => buttons(e.target.value)}>*</button>
        </div>

        <div>
          <button className="number" value={"0"} onClick={(e) => buttons(e.target.value)}>0</button> 
          <button className="number" value={"00"} onClick={(e) => buttons(e.target.value)}>00</button> 
          <button className="operator equals" value={"="} onClick={handleCalculation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
