import {} from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <div className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
                <div>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
)
}
