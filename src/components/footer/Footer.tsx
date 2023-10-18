export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-96">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold">Stay updated</h3>
            <p className="text-sm mt-4">The best information is here</p>
          </div>

          <div className="mb-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p>&copy; 2023 Next blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
