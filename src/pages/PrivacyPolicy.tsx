import ScrollAnimation from "@/components/ScrollAnimation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Last Updated: June 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <ScrollAnimation>
        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
                <p className="text-muted-foreground mb-8">
                  SG Big Data Research and Consulting ("we", "our", or "us") is committed to protecting your privacy and the security of your personal data. This Privacy Policy explains how we collect, use, and safeguard your information in line with the Kenya Data Protection Act (KDPA), GDPR, and other applicable data protection regulations.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. What Information We Collect</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Company or organization details (if applicable)</li>
                      <li>Usage data (via cookies, analytics, and session tracking)</li>
                      <li>Any personal data voluntarily provided through forms, emails, or WhatsApp</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>To respond to inquiries or service requests</li>
                      <li>To deliver our consulting and analytics services</li>
                      <li>To improve user experience and website performance</li>
                      <li>To send updates, newsletters, and insights (if subscribed)</li>
                      <li>To comply with legal and regulatory obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Legal Basis for Processing</h2>
                    <p className="text-muted-foreground">
                      We process your data based on your consent, our contractual obligations, legal compliance requirements, or our legitimate business interests.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies & Tracking</h2>
                    <p className="text-muted-foreground">
                      We use cookies to personalize content, analyze traffic, and improve our services. You can manage cookie preferences in your browser settings.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing & Third Parties</h2>
                    <p className="text-muted-foreground">
                      We do not sell your personal data. We may share it with trusted service providers (e.g., email or CRM platforms) under strict data protection agreements.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                    <p className="text-muted-foreground mb-3">
                      Under the Kenya Data Protection Act and GDPR, you have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access the personal data we hold about you</li>
                      <li>Request correction or deletion of your data</li>
                      <li>Withdraw your consent at any time</li>
                      <li>Object to processing or request restriction</li>
                      <li>Lodge a complaint with a data protection authority</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
                    <p className="text-muted-foreground">
                      We only retain your data for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Security Measures</h2>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational safeguards to protect your data from unauthorized access, loss, or misuse.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                    <p className="text-muted-foreground">
                      If data is transferred outside Kenya, we ensure it is done lawfully and with adequate safeguards, in compliance with data protection laws.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Updates to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised date.
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about this policy or how we use your data, contact us at:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Email:</strong> <a href="mailto:info@sgbigdata.com" className="text-primary hover:underline">info@sgbigdata.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+254793859234" className="text-primary hover:underline">+254 793 859234</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default PrivacyPolicy;