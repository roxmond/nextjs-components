import profilePic from "@/public/profile-pic.png";
import logo from "@/public/logo-transparent.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillGearFill,
  BsFillEnvelopeFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
//import navbar from ".";

interface NavBarProps {
  onSelectOption: (option: string) => void;
}

export default function NavBar({ onSelectOption }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleOptionClick = (option: string) => {
      onSelectOption(option); // Call the callback with the selected option
      setIsOpen(false); // Close the menu
    };

    return (
      <div className="flex justify-center items-center sticky top-1 z-10">
        <nav className="p-4 relative left-0 top-2 flex w-[98%] items-center rounded-xl border justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">

      
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center relative">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none mr-4"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div className="text-[#ffffff] font-bold text-lg">
            Components
            </div>

            
  
            {/* Dropdown Menu as Pop-up */}
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-3 top-12 left-0 w-72 border rounded-xl bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-700 shadow-lg z-50"
              >
                <ul className="flex flex-col">
                  <li>
                    <Link href="#">
                      <span className="text-white hover:bg-gray-700 block px-4 py-2" onClick={() => handleOptionClick('tableflex')}>
                        <code><span className="text-[#808073]">&lt;</span><span className="text-[#4ec990]">TableFlex</span> <span className="text-[#808073]">/</span><span className="text-[#808073]">&gt;</span></code>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="text-white hover:bg-gray-700 block px-4 py-2">
                      <code><span className="text-[#808073]">&lt;</span><span className="text-[#4ec990]">NavBar</span> <span className="text-[#808073]">/</span><span className="text-[#808073]">&gt;</span><span className="text-[#6a9949]"> &#47;&#47; Comming Soon</span></code>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="text-white hover:bg-gray-700 block px-4 py-2">
                      <code><span className="text-[#808073]">&lt;</span><span className="text-[#4ec990]">Card</span> <span className="text-[#808073]">/</span><span className="text-[#808073]">&gt;</span><span className="text-[#6a9949]"> &#47;&#47; Comming Soon</span></code>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
  
          <div className="md:flex md:space-x-4">
            
            <Link href="/">
                <span className="text-white hover:bg-gray-700 block px-4 py-2">
                    Back
                </span>
            </Link>
            
          </div>
          
        </div>
      </nav>
      </div>
    );
  }