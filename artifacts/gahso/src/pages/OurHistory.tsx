import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const OurHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container-wide section-padding text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Since 2016
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our History
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small group of passionate youth in Kenya to a registered Public Benefit
              Organization operating across Kenya and the UK — this is the story of GAHSO.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container-wide section-padding">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

                <div className="space-y-12">
                  {[
                    {
                      year: "2016",
                      title: "Founded",
                      description:
                        "GAHSO was founded by a group of youth activists in Nairobi, Kenya, united by a shared vision of empowering marginalized communities through evidence-based, community-driven programs.",
                    },
                    {
                      year: "2018",
                      title: "First Programs Launched",
                      description:
                        "We launched our first community health and youth leadership programs in informal settlements across Nairobi, reaching hundreds of young people and women with life-skills training and health education.",
                    },
                    {
                      year: "2020",
                      title: "TaTua Initiative Established",
                      description:
                        "The TaTua Initiative was born — a flagship livelihood program encompassing TaTua Farms, TaTua Salon, and MloFlow, creating dignified economic opportunities for marginalized youth and women.",
                    },
                    {
                      year: "2021",
                      title: "Registered as a PBO",
                      description:
                        "GAHSO was formally registered as a Public Benefit Organization (PBO) in Kenya, marking a new chapter of accountability, transparency, and institutional credibility.",
                    },
                    {
                      year: "2022",
                      title: "UK Expansion",
                      description:
                        "GAHSO expanded its footprint to the United Kingdom, establishing a presence to build international partnerships and amplify the voice of marginalized communities on the global stage.",
                    },
                    {
                      year: "2023",
                      title: "InnovHubs & Digital Inclusion",
                      description:
                        "We launched InnovHubs — a community innovation hub — and the Digital Inclusion (CUDI-GW) program, bridging the digital divide for youth and women in underserved communities.",
                    },
                    {
                      year: "Today",
                      title: "Growing Impact",
                      description:
                        "GAHSO continues to grow its programs, partnerships, and reach — staying true to its founding values of Compassion, Equity, Collaboration, and Sustainability.",
                    },
                  ].map((item) => (
                    <div key={item.year} className="relative flex gap-8 pl-16">
                      {/* Dot */}
                      <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md -translate-x-1/2" />
                      <div>
                        <span className="inline-block px-3 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values reminder */}
        <section className="py-16 bg-primary/5">
          <div className="container-wide section-padding text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Rooted in Our Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Every milestone in our history has been guided by the four values at the
              heart of GAHSO.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {["Compassion", "Equity", "Collaboration", "Sustainability"].map((value) => (
                <div
                  key={value}
                  className="bg-background rounded-xl py-4 px-3 shadow-card font-semibold text-primary text-sm"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurHistory;
