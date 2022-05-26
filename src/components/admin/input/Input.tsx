import React from 'react'
import useLogin from '../../../hooks/useLogin'

const Input = ({ type, id, placeholder, handleLogin }) => {


  return (
    <>
      <div className="mb-6 relative">

        <input
          type={type}
          id={id}
          name={id}
          className="form-control text-white bg-gris-claro block w-full px-4 py-2 text-xl font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-gris-oscuro focus:border-blue-900 focus:outline-none peer"
          placeholder={" "}
          onChange={(e) => { handleLogin(e) }}
        />

        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {placeholder}
        </label>

      </div>
    </>
  )
}

export default Input