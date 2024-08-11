import GetStarted from '../../assets/icons/GetStarted.tsx'
import LightMode from '../../assets/icons/LightMode.tsx'
import React from 'react'

const Header = () => (
  <div className="row items-center justify-between w-full">
    <p className="font-bold text-5xl">
      <span>Cryp</span>
      <span className="text-primary">XO</span>
    </p>

    <ul className="text-2xl row gap-20">
      <li className="font-bold">Discover</li>
      <div className="row gap-4">
        <li>NFT Marketplace</li>
        <li className="bg-primary text-[14px] font-bold px-2 rounded">New</li>
      </div>
      <li>How it Work</li>
    </ul>

    <div className="row gap-7">
      <button className="row items-center gap-4 px-8 py-2 border border-primary rounded-3xl">
        <span className="text-primary text-xl font-bold">Get Started</span>
        <GetStarted />
      </button>

      <LightMode />
    </div>
  </div>
)

export default Header
