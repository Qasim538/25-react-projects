import React from 'react'
import WindowWidth from './WindowWidth';


const UseWindowResize = () => {

    const windowSize = WindowWidth();
    const {width, height} = windowSize
  return (
    <div>

        <h1>Use Window Resize Hook</h1>
        <p>
        Width is {width}</p>
        <p>Height is {height} </p>

      
    </div>
  )
}

export default UseWindowResize
