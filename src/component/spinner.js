import React from 'react'
import loading from "../loading.gif"

const spinner = () => {
  return (
    <div className='flex justify-center'>
        <img className='w-14 mt-28' src={loading} alt='loaging'/>
    </div>
  )
}

export default spinner