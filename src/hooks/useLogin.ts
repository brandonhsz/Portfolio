import { useState } from 'react';
import { ILogin } from '../../interfaces/login.interface';
import jwt from 'jsonwebtoken';
const useLogin = () => {


  const [login, setLogin] = useState<ILogin | any>({
    name: '',
    password: '',
  })

  const [token, setToken] = useState<string>('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const res = await fetch(`https://jwt-brandon.herokuapp.com/login`, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    })
    const data = await res.json()
    setToken(data.token)

  }

  const resetLogin = () => {
    setLogin({
      name: '',
      password: ''
    })
  }

  const auth = () => {

    const token = localStorage.getItem('token')

    if (!token) {
      return true
    } else {
      try {
        jwt.verify(token, process.env.NEXT_PUBLIC_SECRET)
      } catch (e) {
        return true
      }
    }
  }

  return {
    login,
    handleLogin,
    resetLogin,
    handleSubmit,
    token,
    setToken,
    auth
  }
}

export default useLogin