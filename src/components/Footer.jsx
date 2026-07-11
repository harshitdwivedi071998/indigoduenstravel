import { NavLink } from "react-router-dom";
import { navigationLinks } from "./Navigation";
// import { navigationLinks } from "../constants/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company */}

          <div>
            <h3 className="text-2xl font-bold mb-4">Royal Desert Rides</h3>

            <p className="text-gray-400">
              Premium chauffeur-driven transportation services across Rajasthan.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[#D4A017] font-semibold"
                          : "text-gray-400 hover:text-white"
                      }
                    `
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h4 className="font-semibold mb-4">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Airport Transfers</li>
              <li>Sightseeing Tours</li>
              <li>Corporate Travel</li>
              <li>Group Tours</li>
              <li>Custom Trips</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-gray-400">
              <p>Jodhpur, Rajasthan</p>
              <p>+91 98765 43210</p>
              <p>info@royaldesertrides.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Royal Desert Rides. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
