import React from 'react'

export const Contact = () => {
  return (
    <main className="w-full bg-slate-50 absolute top-[20vh]">

      {/* Header */}
      <section className=" from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-sky-500">
            Get in Touch
          </h1>
          <p className="mt-4 text-blue-100 text-slate-800 text-3xl font-bold">
            If You Have Any Query, Feel Free To Contact Us
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Let’s Start a Conversation
            </h2>

            <p className="text-slate-500 text-lg">
           If You Have Any Query, Feel Free To Contact Us
            </p>

            <div className="space-y-5 text-slate-700 text-lg">
              <p className="flex items-center gap-3">
                📍 <span>Minaxi chowk, opp. Guddodagi Pharmaceuticals, Shahu Nagar, Vijayapura, Karnataka</span>
              </p>
              <p className="flex items-center gap-3">
                📧 <span>info@vipas.online</span>
              </p>
              <p className="flex items-center gap-3">
                📞 <span>+91 7353665845</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-6">
            
            <div>
              <label className="block text-sm font-medium text-slate-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </main>
  )
}
