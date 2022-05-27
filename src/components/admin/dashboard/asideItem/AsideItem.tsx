import React from 'react'

const AsideItem = ({ Icon, name }) => {
  return (
    <>
      <li className='my-4'>
        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          {Icon}
          <span className="ml-3">{name}</span>
        </a>
      </li>
    </>
  )
}

export default AsideItem