import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/Logo Horizontal.png" alt="SG Big Data Logo" className="h-10 mb-6" />
            <p className="text-card-foreground/80 text-base mb-6 max-w-md">
              Transforming research and data into actionable intelligence through strategy, 
              capacity building, advanced analytics, intelligent automation, and governance.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/sg-big-data-research-and-consulting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/consult_sg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://x.com/consult_sg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.facebook.com/consult.sg.research" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-card-foreground/80">
              <li><a href="/services" className="hover:text-primary transition-colors">Research & Advisory</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Data Analytics & BI</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="/training" className="hover:text-primary transition-colors">Training & Capacity Building</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Data Governance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-card-foreground/80">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/training" className="hover:text-primary transition-colors">SG Data School</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog & Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-card-foreground/20">
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Information</h4>
            <ul className="space-y-2 text-card-foreground/80">
              <li>Email: <a href="mailto:info@sgbigdata.com" className="hover:text-primary transition-colors">info@sgbigdata.com</a></li>
              <li>Phone: <a href="tel:+254793859234" className="hover:text-primary transition-colors">+254 793 859 234</a></li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-card-foreground/80">
              <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Service</a></li>
      
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
            <p className="text-card-foreground/80 text-sm mb-4">
              Stay updated with the latest insights in data science and AI.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 rounded-lg border border-card-foreground/20 bg-background text-foreground text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-card-foreground/20 pt-8 text-center">
          <p className="text-sm text-card-foreground/60">
            &copy; 2025 SG Big Data Research and Consulting. All rights reserved. | 
            Advancing ethical, inclusive, and responsible data use worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
