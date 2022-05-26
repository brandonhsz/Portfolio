import Input from "../input/Input"
import styles from "./login.module.css"
import useLogin from "../../../hooks/useLogin"
import { useEffect } from 'react';
import { useRouter } from "next/router";
const Login = () => {

  const { handleLogin, handleSubmit, token } = useLogin()
  const router = useRouter()

  useEffect(() => {

    if (token) {
      window.localStorage.setItem('token', token)
      router.push('/admin/dashboard')
    }

  }, [token])

  return (
    <div className={`${styles.container}`}>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

        <a href="#name">
          <h1 className=" text-center font-extrabold bg-gris-claro rounded-full cursor-pointer hover:bg-gris-oscuro">ADMIN PANEL</h1>
        </a>

        <form>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p>&nbsp;Login&nbsp;</p>
          </div>

          <Input
            type="text"
            id="name"
            placeholder="Name:"
            handleLogin={handleLogin}
          />

          <Input
            type="password"
            id="password"
            placeholder="Password:"
            handleLogin={handleLogin}
          />

          <div className="flex justify-between items-center mb-6">

          </div>

          <div className="text-center lg:text-left flex justify-center">

            <input
              type="button"
              value="LOGIN"
              className="bg-gris-claro cursor-pointer px-10 py-1 rounded-lg border border-solid hover:border-solid hover:border-blue-900 hover:bg-gris-oscuro focus:outline-none focus:shadow-outline"
              onClick={() => { handleSubmit() }}
            />

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login