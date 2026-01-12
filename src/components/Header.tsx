import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
            <button 
              onClick={() => scrollToSection('product')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group hover:cursor-pointer"
            >
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group hover:cursor-pointer"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button - Hidden on mobile, shown on desktop */}
          <button 
            onClick={() => scrollToSection('cta')}
            className="hidden md:flex border-2 rounded-full px-6 py-2 font-medium border-black items-center transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-102 group hover:cursor-pointer"
          >
            Get Early Access
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('product')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium transition-colors py-2 hover:cursor-pointer"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium transition-colors py-2 hover:cursor-pointer"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="w-full border-2 rounded-full px-6 py-2 font-medium border-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-102 group hover:cursor-pointer"
            >
              Get Early Access
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
