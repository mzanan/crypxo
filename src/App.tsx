import React from 'react'
import Header from './components/Header.tsx'
import './index.css'

const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="container row justify-center pt-16 mx-auto">
        <Header />
      </div>
    </div>
  )
}

export default App
