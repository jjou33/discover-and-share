const Navigation = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            Logo
          </a>
          <ul className="ml-8 flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-md bg-white px-4 py-2 text-gray-900 hover:bg-gray-100">
            Login
          </button>
          <button className="ml-4 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-800">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
