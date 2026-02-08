import React from 'react'

const About = () => {
  return (
    <section className="w-full bg-slate-50 absolute top-[20%] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">

        <h1 className="text-3xl md:text-4xl font-mono font-bold uppercase text-blue-500">
          About Us
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Your Premier Web Development and Digital Marketing Partner
        </h2>

        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
          At Vipas, we pride ourselves on being a leading force in the web development and digital marketing landscape.
          With over five years of dedicated experience, our team has honed its skills across various platforms and industries,
          delivering exceptional results for our clients. Our journey is marked by successful collaborations with notable brands
          such as Ads Dukhan, Software Shofiphy, Digital Dukan, and Classup Live.
        </p>

        <h3 className="text-2xl font-bold text-slate-800">
          Our Expertise in Web Development
        </h3>

        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
          Web development is at the core of what we do at Vipas. Our professional web developers bring a wealth of experience
          and a deep understanding of the latest technologies and trends. Whether you're looking to build a robust e-commerce
          platform, a dynamic corporate website, or a sleek portfolio site, we turn your vision into reality.
        </p>

        <h4 className="text-xl font-semibold text-slate-800">
          Key Areas of Our Web Development Services
        </h4>

        {/* Services List */}
        <div className="flex flex-col gap-6">

          <p>
            <span className="font-semibold text-slate-700">
              01. Custom Web Design and Development:
            </span>{' '}
            <span className="text-slate-500">
              We create tailor-made websites that reflect your brand identity, are user-friendly,
              and optimized for performance.
            </span>
          </p>

          <p>
            <span className="font-semibold text-slate-700">
              02. E-Commerce Solutions:
            </span>{' '}
            <span className="text-slate-500">
              Secure payment gateways, shopping carts, and user management systems for seamless online shopping.
            </span>
          </p>

          <p>
            <span className="font-semibold text-slate-700">
              03. Responsive Design:
            </span>{' '}
            <span className="text-slate-500">
              Mobile-first, fully responsive websites that perform flawlessly on all devices.
            </span>
          </p>

          <p>
            <span className="font-semibold text-slate-700">
              04. Content Management Systems (CMS):
            </span>{' '}
            <span className="text-slate-500">
              Expertise in WordPress, Joomla, and Drupal for easy content management.
            </span>
          </p>

          <p>
            <span className="font-semibold text-slate-700">
              05. SEO-Friendly Development:
            </span>{' '}
            <span className="text-slate-500">
              SEO best practices built-in to help your site rank better on Google and other search engines.
            </span>
          </p>

        </div>

      </div>
    </section>
  )
}

export default About
