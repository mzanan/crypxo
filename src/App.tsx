import React from 'react'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import Heart from './assets/icons/Heart.tsx'
import vrDarkImage from './assets/images/vr-dark.png'
import vrLightImage from './assets/images/vr-light.png'
import doubleArrow from './assets/icons/double-arrow.png'
import NewsCard from './components/NewsCard/NewsCard.tsx'
import './index.css'
import { useTheme } from './contexts/ThemeProvider/ThemeProvider.tsx'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className="w-full h-screen relative">
      <div className="w-[246px] h-[580px] bg-shape-left bg-no-repeat absolute top-32 left-0 -z-10"></div>
      <div className="w-[1100px] h-[480px] bg-shape-bottom bg-no-repeat absolute bottom-0 right-0 -z-10"></div>

      <div className="container col justify-between py-16 mx-auto h-screen">
        <Header />

        <div className="row items-center justify-between px-20">
          <div className="col gap-10 max-w-[650px] w-full flex-1">
            <p className="font-bold lg:text-5xl xl:text-6xl">
              The 1st AMM Dex & DAO based on{' '}
              <span className="relative inline-block">
                brc-20
                <div className="absolute h-1/3 w-[110%] bg-yellow dark:bg-primary bottom-2 -left-2 -z-10"></div>
              </span>{' '}
              token standard
            </p>

            <p className="text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>

            <div className="row gap-7">
              <button className="row items-center justify-center gap-4 lg:px-3 lg:py-0 xl:px-8 xl:py-2 bg-primary rounded-3xl min-w-[180px] min-h-14">
                <span className="text-white text-xl font-bold">Start Now</span>
                <img src={doubleArrow} alt="arrow" />
              </button>

              <button className="row items-center justify-center gap-4 lg:px-3 lg:py-0 xl:px-8 xl:py-2 border border-primary rounded-3xl min-w-[220px] min-h-14">
                <span className="text-black dark:text-primary text-xl font-bold">
                  Get Whitelisted
                </span>
                <Heart
                  color={theme === 'dark' ? 'fill-primary' : 'fill-black'}
                />
              </button>
            </div>
          </div>

          <div className="max-w-[550px] max-h-[550px] w-full h-full aspect-square">
            <img
              src={theme === 'dark' ? vrDarkImage : vrLightImage}
              alt="vr image"
              className="w-full h-full flex flex-1 aspect-square"
            />
          </div>
        </div>

        <NewsCard />

        <Footer />
      </div>
    </div>
  )
}

export default App
