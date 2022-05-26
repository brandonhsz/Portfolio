import { useState } from 'react';
import { ILogin } from '../../interfaces/login.interface';
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



  return {
    login,
    handleLogin,
    resetLogin,
    handleSubmit,
    token,
    setToken,
  }
}

export default useLogin