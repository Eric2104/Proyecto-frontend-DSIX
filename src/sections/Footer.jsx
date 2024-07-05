import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4 mt-auto">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
                <div>
                    <a href="#" class="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    <a href="#" class="text-gray-400 hover:text-white mx-2">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
)
}
