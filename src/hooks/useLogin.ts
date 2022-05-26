import { useState } from 'react';
import { ILogin } from '../../interfaces/login.interface';

const useLogin = () => {

  const [login, setLogin] = useState<ILogin | any>({
    name: '',
    password: '',
  })

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const res = await fetch(`https://brandonhsz.xyz/api/login`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      }
    })
    const data = await res.json()
    console.log(data);

    window.localStorage.setItem('token', data.token)

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
    handleSubmit
  }
}

export default useLogin