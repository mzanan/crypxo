import React from 'react'
import Header from './components/Header.tsx'
import GetStarted from './assets/icons/GetStarted.tsx'
import vrDarkImage from './assets/images/vr-dark.png'
import './index.css'

const App = () => {
  return (
    <div className="w-full h-screen bg-black relative">
      <div className="container col justify-between py-16 mx-auto gap-40 h-screen">
        <Header />

        <div className="col px-20 gap-40">
          <div className="col gap-10 max-w-[650px]">
            <p className="font-bold text-6xl">
              The 1st AMM Dex & DAO based on brc-20 token standard
            </p>

            <p className="text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>

            <div className="row gap-7">
              <button className="row items-center gap-4 px-8 py-2 bg-primary rounded-3xl">
                <span className="text-xl font-bold">Start Now</span>
                <GetStarted />
              </button>

              <button className="row items-center gap-4 px-8 py-2 border border-primary rounded-3xl">
                <span className="text-primary text-xl font-bold">
                  Get Whitelisted
                </span>
                <GetStarted />
              </button>
            </div>
          </div>

          <img
            src={vrDarkImage}
            alt="vr image"
            className="absolute top-0 right-0 w-[1030px] h-[1030px]"
          />
        </div>

        <p>footer</p>
      </div>
    </div>
  )
}

export default App
