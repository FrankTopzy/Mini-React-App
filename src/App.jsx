import { Route, Routes } from 'react-router-dom'
import Todo from './Pages/TODO/Todo'
import Calculator from './Pages/Calculator/Calculator'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Todo/> }/>
        <Route path='/calculator' element={ <Calculator/> }/>
      </Routes>
    </div>
  )
}

export default App