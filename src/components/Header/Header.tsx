import React from 'react'
import GetStarted from '../../assets/icons/GetStarted.tsx'
import LightMode from '../../assets/icons/LightMode.tsx'
import DarkMode from '../../assets/icons/DarkMode.tsx'
import { useTheme } from '../../contexts/ThemeProvider/ThemeProvider.tsx'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="row items-center justify-between w-full px-20">
      <p className="font-bold text-5xl">
        <span>Cryp</span>
        <span className="text-primary">XO</span>
      </p>

      <ul className="text-2xl row lg:gap-6 xl:gap-20">
        <li className="font-bold">Discover</li>
        <div className="row gap-4 items-center">
          <li>NFT Marketplace</li>
          <li className="bg-primary text-[14px] font-bold px-2 pb-2 h-6 rounded col justify-center">
            <span className="h-6 text-lilac-light">New</span>
          </li>
        </div>
        <li>How it Works</li>
      </ul>

      <div className="row gap-7">
        <button className="row items-center gap-4 px-8 py-2 border border-primary rounded-3xl lg:hidden xl:flex ">
          <span className="text-black dark:text-primary text-xl font-bold">
            Get Started
          </span>
          <GetStarted
            color={theme === 'dark' ? 'fill-primary' : 'fill-black'}
          />
        </button>

        <button onClick={toggleTheme} className="active:accent-red-300">
          {theme === 'dark' ? <LightMode /> : <DarkMode />}
        </button>
      </div>
    </div>
  )
}

export default Header
