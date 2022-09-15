import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const MiRuta = () => {

    const {user,logout} = UserAuth()

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('You are logout');
            } catch (error) {
              console.log(error.message)
            }
          }

  return (
    <div>
        <div>
            <button onClick={handleLogout}>salir</button>
        </div>
        <h1>Mi Ruta</h1>
        <p>probando mas cosas</p>
    </div>
  )
}

export default MiRuta