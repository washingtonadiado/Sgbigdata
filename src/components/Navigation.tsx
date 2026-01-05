import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu, X, ChevronDown } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const servicesDropdown = [
    { name: "Research & Evidence-Based Advisory", href: "/services" },
    { name: "Data Analytics & Business Intelligence", href: "/services" },
    { name: "Training & Digital Skills Capacity Building", href: "/services" },
    { name: "AI Solutions, Model Training & Automation", href: "/services" },
    { name: "Data Protection, Governance & Compliance", href: "/services" }
  ];

  const trainingDropdown = [
    { name: "Corporate Training Programs", href: "/training" },
    { name: "Data Analytics Bootcamp", href: "/training" },
    { name: "AI Literacy Workshops", href: "/training" },
    { name: "Digital Transformation Training", href: "/training" },
    { name: "Custom Learning Pathways", href: "/training" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Logo Horizontal.png" alt="SG Big Data Logo" className="h-12" />

        </div>
        
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <NavLink 
            to="/" 
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          
          {/* Training Dropdown */}
          <div className="relative group">
            <NavLink 
              to="/training" 
              className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
              activeClassName="text-primary"
            >
              Training
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {trainingDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <NavLink 
              to="/services" 
              className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
              activeClassName="text-primary"
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {servicesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink 
            to="/about" 
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Contact Us
          </NavLink>
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <CustomButton href="/contact" size="md">
              Book a Consultation
            </CustomButton>
          </div>
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="icon"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" activeClassName="bg-muted">Home</NavLink>
            <NavLink to="/training" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" activeClassName="bg-muted">Training</NavLink>
            <NavLink to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" activeClassName="bg-muted">Services</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" activeClassName="bg-muted">About Us</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" activeClassName="bg-muted">Contact Us</NavLink>
            <div className="mt-4">
              <CustomButton href="/contact" size="md" className="w-full">
                Book a Consultation
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
