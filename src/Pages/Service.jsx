import React from 'react'

const services = [
  {
    title: 'Digital Marketing',
    desc: 'Use of online technologies to promote a business’s products and services.',
    icon: '📢',
  },
  {
    title: 'Data Analytics',
    desc: 'Process of analyzing data to find patterns, draw conclusions, and make decisions.',
    icon: '📊',
  },
  {
    title: 'Web Development',
    desc: 'We create powerful web applications that users can access through a web browser.',
    icon: '</>',
    arrow: true,
  },
  {
    title: 'Apps Development',
    desc: 'Planning, designing, developing, testing, and deploying mobile and web applications.',
    icon: '📱',
  },
  {
    title: 'SEO Optimization',
    desc: 'Improving website visibility in search engines to drive more organic traffic.',
    icon: '🔍',
  },
]

const Services = () => {
  return (
    <main className="w-full bg-white py-24 absolute top-[20vh]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sky-600 font-semibold uppercase tracking-wide">
            Our Services
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Custom IT Solutions for Your <br /> Successful Business
          </h1>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-sky-50 p-10 text-center rounded-lg hover:shadow-lg transition"
            >
              {/* Diamond Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-sky-600 text-white flex items-center justify-center rotate-45">
                  <span className="-rotate-45 text-xl font-bold">
                    {service.icon}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              {service.arrow && (
                <div className="mt-6 flex justify-center">
                  <button className="w-12 h-12 bg-sky-600 text-white flex items-center justify-center rounded hover:bg-sky-700 transition">
                    →
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Call Us Card */}
          <div className="bg-sky-600 text-white p-10 rounded-lg flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">
              Call Us For Quote
            </h3>
            <p className="text-sky-100 mb-6">
              We provide top-notch Web Development & Digital Marketing services
              to take your brand to the next level!
            </p>
            <p className="text-3xl font-bold tracking-wide">
              7353665845
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Services
