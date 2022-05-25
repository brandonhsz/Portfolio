import React from 'react'
import styles from '../qualifications.module.css'
interface IProps {
  img: string
  alt: string
}

const TableContent = ({ img, alt }: IProps) => {
  return (
    <div className='flex flex-col justify-end'>
      <img className={`${styles.center}`} height="180px" width="120px" src={img} alt={alt} />
      <p className={`${styles['table-text']}`}>{alt}</p>
    </div>
  )
}

export default TableContent