import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";

export default function Header() {
  return (
    <header className="w-full  sticky top-0 z-10 bg-gray-100">
      <div className="max-w-5xl px-2 sm:px-0 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo className="mr-3" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group hover:cursor-pointer">
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group hover:cursor-pointer">
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <button className="border-2 rounded-full px-6 py-2 font-medium border-black flex items-center transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-102 group hover:cursor-pointer">
            Get Early Access
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
}
