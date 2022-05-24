import Input from "../input/Input"
import styles from "./login.module.css"
import useLogin from "../../../hooks/useLogin"
const Login = () => {

  const { handleLogin, handleSubmit } = useLogin()



  return (
    <div className={`${styles.container}`}>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p>Login</p>
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

          <div className="text-center lg:text-left">

            <input
              type="button"
              value="LOGIN"
              className="bg-gray-900 cursor-pointer px-10 py-1 rounded-lg hover:border-solid  hover:border-2 hover:border-blue-900 focus:outline-none focus:shadow-outline"
              onClick={() => { handleSubmit() }}
            />

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login