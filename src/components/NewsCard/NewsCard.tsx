import React from 'react'
import mediaNews from '../../assets/images/media-news.png'

const NewsCard = () => (
  <div className="absolute rounded-3xl rounded-br-none border border-gray bg-black/95 top-[66%] left-[28.5%] max-w-[400px]">
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
