import React from 'react'
import Hero1 from '../Components/Hero1'

const Home = () => {
  return (
    <main className="w-full bg-slate-900/40 overflow-x-hidden">
      
      {/* Hero Section */}
      <Hero1 />

      {/* About Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
          
          {/* Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              About Us
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Your Premier Web Development and Digital Marketing Partner
            </h3>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              At Vipas, we pride ourselves on being a leading force in the web development and digital marketing landscape.
              With over five years of experience, we’ve delivered exceptional results across industries.
              Our collaborations with Ads Dukhan, Software Shofiphy, Digital Dukan, and Classup Live reflect our commitment to quality and innovation.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-lg text-slate-800">
              <p className="flex items-center gap-3">
                <span className="text-blue-600">✔</span> Effective Product
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600">✔</span> Professional Staff
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600">✔</span> 24/7 Support
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-600">✔</span> Fair Prices
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://vipas.online/vipas/img/about.jpg"
              alt="Vipas team working on web development"
              loading="lazy"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  )
}

export default Home
