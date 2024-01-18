import React from 'react'

const Error = ({message}) => {
  return (
    <div className='mt-48 flex items-center justify-center text-8xl text-red-600'>{message}</div>
  )
}

export default Error