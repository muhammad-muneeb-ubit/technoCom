import React, { useState } from "react";
import TechnoCom from "../../assets/technocom.jfif";

const Navbar = () => {
  const links = [
    { name: "Home", hash: "#hero-section" },
    { name: "Services", hash: "#services" },
    { name: "About", hash: "#about" },
    { name: "Products", hash: "#products" },
    { name: "Clients", hash: "#clients" },
    { name: "Teams", hash: "#teams" },
    { name: "Contact", hash: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <div className=" w-full flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md border-b-2 border-green-500">
      
      <img className="max-w-36" src={TechnoCom} alt="Logo" />

      <div className="hidden md:flex gap-6 text-green-600 font-medium">
        {links.map((link) => (
          <a
            key={link.name}
            href={`${link.hash}`}
            className={ `hover:text-green-700 transition hover:underline text-[16px]` }
          >
            {link.name}
          </a>
        ))}
      </div>

      <button
        className="md:hidden text-3xl text-green-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={`${link.hash}`}
              onClick={() => setMenuOpen(false)}
              className={"text-green-700 text-lg hover:text-green-500 hover:underline"}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
