export default function Services() {
  const services = [
    { icon: '🛣️', name: 'Driveway Replacement' },
    { icon: '🧱', name: 'Paver Installation' },
    { icon: '🏗️', name: 'Concrete Work' },
    { icon: '🌳', name: 'Backyard Hardscape' },
    { icon: '🚶', name: 'Walkways and Paths' },
    { icon: '☀️', name: 'Patio & Outdoor Surfaces' }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Services We Connect You With
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Browse our network of contractors specializing in outdoor surface projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
