import Image from "next/image";
import HML_LOGO from "@/assets/HML_Logo_NBG.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#5381a5]">
            <div className="max-w-full flex justify-between items-center px-4 md:px-10 lg:px-16 xl:px-24 py-6">
                {/* Social Icon */}
                <div className="">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href={"#"}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <FaFacebookSquare />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Description */}
                <div className=" text-center">
                    <p>#1401 Namgang Tower, 15 Mugyo-ro, Jung-gu, 04520 Seoul, Republic of Korea
                    </p>
                    <p>TEL: +82-2-752-3400FAX: +82-2-6280-3402EMAIL: marketing@hi-megaline.com</p>
                    <p>© 2018 HI-MEGALINE All rights reserved</p>
                </div>
                {/* Company Logo */}
                <div className="flex space-x-4">
                    <div>
                        <Link href="#" className="flex items-center py-3 px-2 text-gray-700 hover:text-gray-900">
                            <Image src={HML_LOGO} alt="HML LOGO" width={400} height={200} className="w-full h-10" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}