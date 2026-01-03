import { Route, Routes, useLocation } from 'react-router-dom'
import Todo from './Pages/TODO/Todo'
import Calculator from './Pages/Calculator/Calculator'
import { useEffect, useState } from 'react';


function App() {
  const [locationPath, setLocationPath] = useState('');
  const loaction = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setLocationPath('Calculator') : setLocationPath('Todo');
  }, [loaction]);

  return (
    <div>
      <div>
        <button className='navigator' onClick={() => {
          location.pathname === '/' ? window.location.href = '/calculator' : window.location.href = '/';
        }}>Navigate to {locationPath} Page</button>
      </div>
      <Routes>
        <Route path='/' element={ <Todo/> }/>
        <Route path='/calculator' element={ <Calculator/> }/>
      </Routes>
    </div>
  )
}

export default App