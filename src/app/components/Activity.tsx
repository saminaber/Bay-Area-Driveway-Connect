export default function Activity() {
  const updates = [
    { emoji: '➕', title: 'New Contractor Added', description: 'Trusted contractor joins our Bay Area network weekly' },
    { emoji: '📋', title: 'Requests Being Matched', description: 'Homeowner quote requests reviewed and matched daily' },
    { emoji: '📌', title: 'Open to Inquiries', description: 'Now accepting Bay Area driveway and outdoor project inquiries' },
    { emoji: '✅', title: 'Ready to Match', description: 'Matching available for driveways, pavers, concrete, and outdoor projects' }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          What&apos;s Happening Now
        </h2>

        <div className="space-y-4">
          {updates.map((update, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">{update.emoji}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {update.title}
                </h3>
                <p className="text-gray-600">
                  {update.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-blue-50 border border-blue-200 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Contractor matching</span> is based on project type, location, and availability. 
            You decide which contractor, if any, to hire.
          </p>
        </div>
      </div>
    </section>
  )
}
