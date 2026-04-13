'use client'

export default function CTASection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Get Started Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Homeowners CTA */}
          <div className="p-12 rounded-lg bg-white border-2 border-blue-600 shadow-lg">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Homeowners</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Submit your project details and we&apos;ll connect you with qualified contractors in your area. 
              Get free quotes and choose the right contractor for your needs.
            </p>
            <button
              onClick={scrollToForm}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Request Contractor Match
            </button>
          </div>

          {/* Contractors CTA */}
          <div className="p-12 rounded-lg bg-white border-2 border-gray-300 shadow-lg">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Contractors</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our network and get access to local Bay Area project opportunities. 
              Connect with homeowners looking for your services.
            </p>
            <a
              href="mailto:saminaber2005@gmail.com?subject=Contractor%20Network%20Inquiry&body=I'm%20interested%20in%20joining%20Bay%20Area%20Driveway%20Connect."
              className="block text-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
