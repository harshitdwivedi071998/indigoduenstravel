import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "./Navigation";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Royal Desert Rides Logo"
            className="h-18 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <div className="flex gap-2">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition ${isActive
                    ? "bg-[#D4A017] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <button className="hidden md:block bg-yellow-600 text-white px-5 py-2 rounded-lg">
          Book Now
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/">Home</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
