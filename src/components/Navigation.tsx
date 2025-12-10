import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">SG BIG DATA</div>
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

        <Button variant="default" size="lg" className="rounded-full">
          Book a Consultation
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
