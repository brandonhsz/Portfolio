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
    const res = await fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      body: JSON.stringify(login),
    })
    const data = await res.json()
    console.log(data);
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