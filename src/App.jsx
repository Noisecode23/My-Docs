import React from 'react'
import Background from './Components/background'
import Foreground from './Components/Foreground'

function App() {
  return (
    <>
    <div className='relative w-full h-screen bg-zinc-100'>
      <Background />
      <Foreground />
    </div>
    </>
  )
}

export default App
