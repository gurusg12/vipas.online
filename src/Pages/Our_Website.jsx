import React from 'react'

const projects = [
  {
    title: 'Karunad Kampu',
    desc: 'A cultural platform highlighting Karnataka’s traditions, Kannada literature, and historical heritage.',
    img: 'https://vipas.online/vipas/img/portfolio1.jpg',
    link: '#',
  },
  {
    title: 'Link Propertys',
    desc: 'A real estate website for listing and finding residential and commercial properties.',
    img: 'https://vipas.online/vipas/img/portfolio2.jpg',
    link: '#',
  },
  {
    title: 'Sudditana News',
    desc: 'A Kannada news portal delivering regional, national, and global updates.',
    img: 'https://vipas.online/vipas/img/portfolio3.jpg',
    link: '#',
  },
  {
    title: 'Nagabrahma Jyotishalaya',
    desc: 'Astrology and spiritual services including horoscope analysis and remedies.',
    img: 'https://vipas.online/vipas/img/portfolio4.jpg',
    link: '#',
  },
  {
    title: 'Property Basket',
    desc: 'A digital platform for browsing and managing property listings and rentals.',
    img: 'https://vipas.online/vipas/img/portfolio5.jpg',
    link: '#',
  },
]

const Our_Website = () => {
  return (
    <main className="w-full bg-slate-50 py-20 absolute top-[20vh]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Our Website
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-sky-600 text-white text-sm px-3 py-1 rounded">
                  Client
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  className="text-sky-600 font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
                >
                  VISIT SITE →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default Our_Website
