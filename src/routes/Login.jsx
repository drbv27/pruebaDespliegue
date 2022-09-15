import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const {signIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await signIn(email,password)
          navigate('/miruta')
        } catch (e) {
          setError(e.message);
          console.log(e.message)
        }
    
      }

  return (
    <div>
        <h1>Ingreso</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder="contraseña"onChange={(e)=>setPassword(e.target.value)}/>
            <button>Ingresar</button>
        </form>
    </div>
  )
}

export default Login