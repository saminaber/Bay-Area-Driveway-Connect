export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell Us About Your Project',
      description: 'Share details about your driveway, paver, concrete, or outdoor surface project including location and timeline.'
    },
    {
      number: '2',
      title: 'We Review and Match',
      description: 'Our team reviews your project and matches you with contractors experienced in your type of work and location.'
    },
    {
      number: '3',
      title: 'Compare and Decide',
      description: 'Review contractor profiles and quotes. You decide which contractor, if any, is the right fit for your project.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-300 -z-10"></div>
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
