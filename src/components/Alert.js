import React, { useContext } from 'react'
import bookContext from '../context/booking/bookContext'

const Alert = (props) => {
    const context = useContext(bookContext);
    const { profile } = context;
  return (
    <div className='show-alert'>
      <div className='alert-user'>{props.alert}</div>
      <div className='fontawesome-user'>{profile}</div>   
    </div>
  )
}

export default Alert
