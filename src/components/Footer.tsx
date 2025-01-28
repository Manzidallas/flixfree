import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footing text-gray-300 py-20 px-5">
        <div className="container relative mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Logo and Terms */}
          <div className="col-span-2 md:col-span-1">
            <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="MovieLogo" className="h-8 mb-4" />
            <div className='md:absolute bottom-0 md:space-y-2'>
                <p className="text-sm">&copy;2024 FakeFlix Inc.</p>
                <p className="text-sm">Terms of Service | Privacy Policy</p>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-bold mb-2">Movies</h3>
            <ul className='space-y-3 mt-5'>
              <li><a href="#" className="hover:text-white font-light">Treding Movies</a></li>
              <li><a href="#" className="hover:text-white">Treding Animations</a></li>
              <li><a href="#" className="hover:text-white">Coming Soon</a></li>
              <li><a href="#" className="hover:text-white">Trailers</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-bold mb-2">About us</h3>
            <ul className='space-y-3 mt-5'>
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className='space-y-3 mt-5'>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="font-bold mb-2">Get in touch</h3>
            <p className="text-sm mb-4">Questions or feedback? We'd love to hear from you.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer