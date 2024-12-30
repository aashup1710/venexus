import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">VENEXUS</h4>
                    <p className="text-sm text-left text-gray-400">
                        Stay connected and informed by following us
                        on our various social media channels.
                        <br></br>
                        Feel free to reach out via email for sponsorship
                        or investment opportunities.
                        <br></br>
                        Your engagement is valuable to us!
                    </p>
                </div>

                {/* Navigation Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Navigations</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#products" className="hover:underline">
                                Products/Services
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="hover:underline">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Know More Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Know More</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#partner" className="hover:underline">
                                Partner Benefits
                            </a>
                        </li>
                        <li>
                            <a href="#sponsorship" className="hover:underline">
                                Sponsorship Brochure
                            </a>
                        </li>
                        <li>
                            <a href="#career" className="hover:underline">
                                Career
                            </a>
                        </li>
                        <li>
                            <a href="#volunteer" className="hover:underline">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <p>Email: <a href="mailto:asinth@venexusglobalcap.in" className="hover:underline">info@venexus.io</a></p>
                        </li>
                        <li>
                            <p>Address: Headquarters Space, Hi-Tech City, Hyderbad, India</p>
                        </li>
                        <li>
                            <div className="flex justify-center space-x-4">
                                <a href="https://www.google.com" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={24} /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; Copyright Venexus, 2024. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
