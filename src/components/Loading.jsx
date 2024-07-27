import React from 'react'

function Loading() {
  return (
    <div className='fixed inset-0 flex items-center justify-center mx-40 my-40'>
      <span className="loading loading-infinity loading-lg text-warning "></span>
    </div>
  )
}

export default Loading