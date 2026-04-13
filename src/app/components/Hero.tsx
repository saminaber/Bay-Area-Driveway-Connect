'use client'

export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Find trusted driveway and outdoor contractors across the Bay Area
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          We help homeowners connect with local contractors for driveways, pavers, concrete, and outdoor surface upgrades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Request Free Quotes
          </button>
          
          <a
            href="mailto:saminaber2005@gmail.com?subject=Contractor%20Inquiry"
            className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg border-2 border-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            For Contractors
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Free to request quotes • No upfront costs • Local Bay Area network
        </p>
      </div>
    </section>
  )
}
