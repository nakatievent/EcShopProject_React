import React, { FC } from 'react'




export const Hero: FC = () => {
	return (
    <div className="relative overflow-hidden bg-white text-center" style={heroStyle['.hero-background']}>
    <div className="pb-16 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1
            className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl"
            style={heroStyle['.text-outline-white']}
          >
            リゾート気分を自宅で楽しもう。
          </h1>
          <p className="mt-4 text-xl text-gray-900" style={heroStyle['.text-outline-white']}>
            沖縄の商品を自宅で楽しもう。
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  </div>
	)
}

const heroStyle = {
	'.hero-background': {
		backgroundImage: "url('/romeo-a-RHd0VtC0bLw-unsplash.jpg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '70vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white'
	},
	'.text-outline-white': {
		textShadow: '1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white'
	}
}
