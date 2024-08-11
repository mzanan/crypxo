import twitter from '../../assets/icons/twitter.png'
import telegram from '../../assets/icons/telegram.png'
import medium from '../../assets/icons/medium.png'
import Market from '../../assets/icons/Market.tsx'
import watch from '../../assets/icons/watch.png'
import yahoo from '../../assets/icons/yahoo.png'
import React from 'react'

const Footer = () => (
  <div className="row justify-between">
    <div className="row bg-dark rounded-3xl rounded-tl-none px-5 py-2 gap-4 items-center text-xl font-light">
      Connect
      <img src={twitter} alt="twitter" />
      <img src={telegram} alt="telegram" />
      <img src={medium} alt="medium" />
    </div>

    <div className="row bg-dark rounded-3xl rounded-tr-none px-5 py-2 gap-4 items-center text-xl font-light">
      Media
      <div className="row items-center relative">
        <Market className="absolute top-1" />
        <div className="w-[30px] h-6 bg-dark" />
        <img src={watch} alt="watch" />
      </div>
      <img src={yahoo} alt="yahoo" />
    </div>

    <div className="row bg-dark rounded-3xl px-5 py-2 items-center text-sm text-white/40">
      Copyright © 2023 CrypXO. All rights reserved.
    </div>
  </div>
)
export default Footer
