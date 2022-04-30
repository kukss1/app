import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import styles from './Check.module.scss'


export const Check = ({isCompleted}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.svg} >
       {isCompleted
       &&
        <AiOutlineCheck/>
}
       </div>
    </div>
  )
}
