const Footer = () => {
  return (
    <footer className="bg-navy text-hero-foreground py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SG BIG DATA</h3>
            <p className="text-hero-foreground/80 text-sm">
              Research and Consulting
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li>Business Analytics</li>
              <li>Data Strategy</li>
              <li>AI Solutions</li>
              <li>Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li>info@sgbigdata.com</li>
              <li>+254 XXX XXX XXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hero-foreground/20 pt-8 text-center text-sm text-hero-foreground/60">
          <p>&copy; 2025 SG Big Data. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
