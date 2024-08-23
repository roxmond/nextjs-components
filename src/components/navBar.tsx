import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    const handleOptionClick = (option: string) => {
      onSelectOption(option); // Call the callback with the selected option
      setIsOpen(false); // Close the menu
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  

    return (
      <div className="flex justify-center items-center sticky top-1 z-10 ">
        <nav className="p-4 top-2 ml-2 mr-2 flex w-full items-center rounded-xl border justify-center bg-slate-900 bg-opacity-35 backdrop-blur-[5px]"> {/*from-zinc-200*/}

      
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
      {/* Dropdown Menu as Pop-up */}
      {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-8 top-12 left-2 sm:left-44 md:left-16 w-72 border rounded-xl justify-center bg-slate-900 bg-opacity-35 backdrop-blur-[15px]">
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
    );
  }