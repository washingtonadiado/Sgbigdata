import ScrollAnimation from "@/components/ScrollAnimation";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Terms of <span className="text-primary">Use</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Last Updated: June 2025
          </p>
        </div>
      </section>

      {/* Terms of Use Content */}
      <ScrollAnimation>
        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
                <p className="text-muted-foreground mb-8">
                  Welcome to the website of SG Big Data Research and Consulting ("SG Big Data", "we", "us", or "our"). By accessing or using this website (the "Site"), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Use of the Website</h2>
                    <p className="text-muted-foreground">
                      You agree to use this website only for lawful purposes and in a way that does not infringe the rights or restrict the use of this site by any third party. Content on this site is for informational purposes only and may be updated or removed without notice.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                      All content on this site, including text, graphics, logos, icons, images, and software, is the property of SG Big Data or its content suppliers and is protected by applicable copyright and trademark laws. Unauthorized use or reproduction is prohibited.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. No Warranties</h2>
                    <p className="text-muted-foreground">
                      While we strive to provide accurate and up-to-date information, this website and its content are provided "as is" without warranties of any kind. We do not guarantee that the site will always be available, error-free, or free of harmful components.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                      SG Big Data will not be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website, including but not limited to loss of data, revenue, or business opportunities.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Links to Other Websites</h2>
                    <p className="text-muted-foreground">
                      This website may contain links to third-party websites. SG Big Data is not responsible for the content, accuracy, or privacy practices of those external sites. Visiting such sites is at your own risk.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. User Submissions</h2>
                    <p className="text-muted-foreground">
                      Any feedback, suggestions, or other communications you send to us through the Site shall be considered non-confidential and non-proprietary. We are free to use such information without restriction.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to These Terms</h2>
                    <p className="text-muted-foreground">
                      We reserve the right to revise these Terms of Use at any time. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                    <p className="text-muted-foreground">
                      These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these terms will be subject to the exclusive jurisdiction of Kenyan courts.
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      For questions about these Terms of Use, please contact us:
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

export default TermsOfUse;