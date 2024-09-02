import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hamburger-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        ☰
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li>Home</li>
          <li>About</li>
          <li>
            Services
            <ul className="sub-menu">
              <li>Service 1</li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
