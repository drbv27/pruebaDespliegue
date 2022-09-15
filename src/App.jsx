import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import { AuthContextProvider } from './context/AuthContext';
import Login from './routes/Login';
import MiRuta from './routes/MiRuta';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/miruta" element={<MiRuta/>}/>
      </Routes>
    </AuthContextProvider>
  )
}

export default App
