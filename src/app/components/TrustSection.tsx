export default function TrustSection() {
  const values = [
    {
      icon: '📍',
      title: 'Local Bay Area Focus',
      description: 'We work exclusively with contractors in the Bay Area who understand local requirements and communities.'
    },
    {
      icon: '⚡',
      title: 'Simple Matching Process',
      description: 'Tell us your project details and we match you with qualified contractors in your area.'
    },
    {
      icon: '💰',
      title: 'No Upfront Cost',
      description: 'Request contractor matches for free. You only pay if you choose to hire.'
    },
    {
      icon: '⏱️',
      title: 'Save Time',
      description: 'Spend less time searching and more time getting work done with the right contractor.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Why Choose Bay Area Driveway Connect?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-gray-50"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
