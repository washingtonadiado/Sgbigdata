import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Logo Horizontal.png" alt="SG Big Data Logo" className="h-8" />
          <div className="text-xs text-muted-foreground hidden sm:block">
            RESEARCH AND CONSULTING
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          <NavLink 
            to="/training" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Training
          </NavLink>
          <NavLink 
            to="/services" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            About us
          </NavLink>
          <NavLink 
            to="/contact" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Contact us
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="default" size="lg" className="rounded-full">
            Book a Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
