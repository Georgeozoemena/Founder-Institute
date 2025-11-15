// src/layouts/LandingLayout.jsx
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function LandingLayout({ children }) {
  const scrollY = useScrollPosition();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 20 ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="font-bold text-xl">FILagos</h1>
          <a
            href="#contact"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Page Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t mt-16">
        © {new Date().getFullYear()} FILagos. All rights reserved.
      </footer>
    </div>
  );
}
