import React from 'react'
import mediaNews from '../../assets/images/media-news.png'

const NewsCard = () => (
  <div className="absolute rounded-3xl rounded-br-none dark:border dark:border-gray bg-white/5 dark:bg-black/5 top-[68%] left-[32.5%] max-w-[400px] backdrop-blur-sm shadow">
    <div className="row gap-6 p-4">
      <img src={mediaNews} alt="media news" />

      <div className="col gap-3">
        <p className="text-xl font-semibold">
          News Headline will be this text..
        </p>

        <p>News element is here and Headline will be this text...</p>

        <div>
          <button className="bg-secondary px-2.5 py-1 rounded-lg font-bold text-lilac-light">
            More info
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default NewsCard
