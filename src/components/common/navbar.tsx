'use client';
import HML_LOGO from "@/assets/HML_Logo_NBG.png";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { navLinks } from "@/utils/menuItems";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-gray-100">
                <div className="max-w-full px-4 md:px-10 lg:px-16 xl:px-24 mx-auto py-4">
                    <div className="flex justify-between">

                        {/* Company Logo */}
                        <div className="flex space-x-4">
                            <div>
                                <Link href="#" className="flex items-center py-3 text-gray-700 hover:text-gray-900">
                                    <Image src={HML_LOGO} alt="HML LOGO" width={400} height={200} className="w-full h-10" />
                                </Link>
                            </div>
                        </div>

                        {/* Primary Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    className="py-5 text-[#094d82] hover:text-[#0e3d61] uppercase relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#094d82] transition-all duration-700 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMenu} className="mobile-menu-button">
                                <HiMenuAlt3 className="text-[#094d82] size-7" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed w-full h-full bg-white z-10 grid pt-[120px] transition-all duration-1000 ease-in-out ${isOpen ? "opacity-100 top-0" : "opacity-0 -top-full"
                        }`}
                >
                    <button className="absolute right-5 top-5 p-3" onClick={toggleMenu}>
                        <IoClose className="text-[#094d82] size-7" />
                    </button>

                    <ul className="text-center text-xl leading-relaxed">
                        {navLinks.map((link) => (
                            <li key={link.name} className="mt-4">
                                <Link href={link.link} onClick={toggleMenu}>
                                    <p className="text-[#094d82] hover:text-gray-900 transition-colors duration-300">{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}