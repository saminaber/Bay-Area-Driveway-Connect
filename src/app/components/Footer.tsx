export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Bay Area Driveway Connect
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Connecting Bay Area homeowners with trusted local contractors for driveway, paver, concrete, and outdoor surface projects.
            </p>
            <p className="text-xs text-gray-500">
              Contractor matching is based on project type, location, and availability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact-form" className="text-gray-400 hover:text-white transition-colors">
                  Request Quotes
                </a>
              </li>
              <li>
                <a href="mailto:saminaber2005@gmail.com?subject=Contractor%20Inquiry" className="text-gray-400 hover:text-white transition-colors">
                  For Contractors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:650-863-2112" className="text-gray-400 hover:text-white transition-colors">
                  (650) 863-2112
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:saminaber2005@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  saminaber2005@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-400">Bay Area, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bay Area Driveway Connect. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Proudly serving the Bay Area
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
