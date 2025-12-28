import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">JobSprint</h2>
                            <p className="text-gray-400">Find your dream job with our platform</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} JobSprint. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
