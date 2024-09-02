import React, { useState } from "react";

const HorizontalMenu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <ul className="flex items-center cursor-pointer justify-center space-x-12">
        <li>Home</li>
        <li>About</li>

        {/* Services Menu with Sub-Menu */}
        <li
          className="relative"
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          Services
          {isSubMenuOpen && (
            <ul className="absolute left-0 mt-2 w-32 hover:cursor-pointer bg-white shadow-lg rounded-md p-2">
              <li className="hover:bg-gray-100 px-2 py-1">Service 1</li>
              <li className="hover:bg-gray-100 px-2 py-1">Service 2</li>
              <li className="hover:bg-gray-100 px-2 py-1">Service 3</li>
            </ul>
          )}
        </li>

        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
