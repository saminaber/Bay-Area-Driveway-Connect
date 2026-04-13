export default function ServiceAreas() {
  const areas = [
    'Los Gatos',
    'Saratoga',
    'San Jose',
    'Palo Alto',
    'Cupertino',
    'Menlo Park',
    'Atherton',
    'Danville',
    'Alamo'
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Serving the Bay Area
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We currently serve these Bay Area communities and surrounding areas
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white border border-blue-200 text-center font-medium text-gray-800 hover:bg-blue-50 transition-colors"
            >
              📍 {area}
            </div>
          ))}
          <div className="p-4 rounded-lg bg-white border border-blue-200 text-center col-span-2 sm:col-span-1 text-sm text-gray-600 italic">
            + surrounding communities
          </div>
        </div>
      </div>
    </section>
  )
}
