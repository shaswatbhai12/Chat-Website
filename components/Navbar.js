import React from "react";
import Link from "next/link";

const Navbar = () =>{
    return(
        <nav className="bg-gray-800 text-white p-40">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-xl font-bold">
                My App
                </Link>
                <ul className="flex space-x-4">
                     <li>
                        <Link href="/" className="hover:text-gray-200">Home</Link>
                        <Link href="/" className="hover:text-gray-200">About</Link>
                        <Link href="/" className="hover:text-gray-200">Contact</Link>
                     </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;