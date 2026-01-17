import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    try {
      console.log('Starting newsletter subscription...');
      
      const templateParams = {
        from_name: 'Newsletter Subscriber',
        from_email: newsletterEmail,
        message: `New newsletter subscription request from: ${newsletterEmail}`,
        phone: 'N/A',
        to_name: 'SG Big Data Team',
        reply_to: newsletterEmail,
      };

      console.log('Newsletter template params:', templateParams);

      const response = await emailjs.send(
        'service_77a3m8b',
        'template_p2g0dbf',
        templateParams,
        'iSsIgKq-MSLH2GVgC'
      );

      console.log('Newsletter EmailJS response:', response);

      if (response.status === 200) {
        toast({
          title: "Subscription Successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setNewsletterEmail('');
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      
      let errorMessage = "There was an error subscribing. Please try again.";
      if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      }
      
      toast({
        title: "Subscription Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-card text-card-foreground" id="contact">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src="/Logo Horizontal.png" alt="SG Big Data Logo" className="h-10 mb-6" />
            </Link>
            <p className="text-card-foreground/80 text-sm max-w-xs">
              Transforming research and data into actionable intelligence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-card-foreground/80">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/training" className="hover:text-primary transition-colors">Training</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-card-foreground/80">
              <li><a href="mailto:info@sgbigdata.com" className="hover:text-primary transition-colors">info@sgbigdata.com</a></li>
              <li><a href="tel:+254793859234" className="hover:text-primary transition-colors">+254 793 859 234</a></li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider">Join Our Newsletter</h4>
            <p className="text-card-foreground/80 text-sm mb-4">
              Get weekly insights on data, AI, and industry trends.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-card-foreground/20 bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubmit()}
              />
              <button 
                onClick={handleNewsletterSubmit}
                disabled={isSubscribing}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubscribing ? "..." : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-card-foreground/60 text-center md:text-left">
            &copy; {currentYear} SG Big Data Research and Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-sm text-card-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="text-sm text-card-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
            <div className="flex gap-4 ml-4">
              <a 
                href="https://www.linkedin.com/company/sg-big-data-research-and-consulting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/consult_sg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/consult_sg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/consult.sg.research" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;