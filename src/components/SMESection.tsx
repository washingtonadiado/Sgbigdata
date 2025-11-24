const SMESection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Smart & Scalable for SMEs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Not every business needs enterprise-scale analytics. That's why we designed the{" "}
              <span className="text-primary font-semibold">Data Smart Starter Kit</span> as a
              practical, jargon-free solution to help growing teams make better, faster decisions
              using their data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our starter kit includes essential analytics tools, automated reporting, and hands-on
              training to get your team up and running quickly without overwhelming complexity or
              cost.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">Business Dashboard</h3>
                  <span className="text-sm text-primary font-semibold">
                    You Closed <span className="text-2xl">200</span> more deals
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {[120, 160, 140, 180, 130, 110].map((height, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-40">
                      <div
                        className="w-full bg-primary rounded-t transition-all duration-300 hover:bg-primary/80"
                        style={{ height: `${height}px` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">Ongoing Sales</p>
                    <div className="flex gap-2">
                      {[21, 40, 7].map((num, i) => (
                        <div key={i} className="bg-primary text-primary-foreground rounded px-3 py-2 font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">Payments</p>
                    <div className="flex gap-2">
                      {[21, 1].map((num, i) => (
                        <div key={i} className="bg-primary text-primary-foreground rounded px-3 py-2 font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMESection;
