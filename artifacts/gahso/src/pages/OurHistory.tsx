import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import founderImg from "@/assets/founder-dafine-auma.png";
import coFounderImg from "@/assets/cofounder-peter-gregory.jpeg";

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
              From a bold idea rooted in community need to a registered Public Benefit
              Organization operating across Kenya and the UK — this is the story of GAHSO.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 bg-background">
          <div className="container-wide section-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-primary/10" />
                  <img
                    src={founderImg}
                    alt="Dafine Auma — Founder, GAHSO"
                    className="relative w-72 md:w-80 rounded-2xl object-cover shadow-card"
                  />
                </div>
              </div>
              {/* Copy */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                  Our Founder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Dafine Auma
                </h2>
                <p className="text-primary font-medium mb-6">Founder, GAHSO</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dafine Auma, founder of GAHSO, is a youth-driven social innovator advancing
                    community health, empowerment, and sustainable development across underserved
                    communities. Her passion for humanitarian work was shaped by early exposure to
                    the daily realities facing young people, vulnerable households, and the girl
                    child — particularly barriers to education, access to quality health services,
                    and protection from social and economic vulnerability.
                  </p>
                  <p>
                    Motivated by the urgent need for stronger youth-led action in public health and
                    community transformation, she founded GAHSO to mobilize young leaders as change
                    agents, strengthen community resilience, and design inclusive, locally driven
                    solutions that respond to real community needs. A central focus of her leadership
                    is the empowerment of the girl child through health education, protection, and
                    pathways that support dignity, opportunity, and long-term well-being.
                  </p>
                  <p>
                    Under her leadership, GAHSO is emerging as a dynamic grassroots platform working
                    at the intersection of health, youth empowerment, and community resilience —
                    building strategic partnerships, strengthening local systems, and delivering
                    impact-driven programs that are rooted in lived realities and designed for
                    scalable change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Founder */}
        <section className="py-20 bg-muted/30">
          <div className="container-wide section-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Copy — left on desktop */}
              <div className="order-2 md:order-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                  Co-Founder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Peter Gregory Odhiambo
                </h2>
                <p className="text-primary font-medium mb-6">Co-Founder, GAHSO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Peter Gregory Odhiambo co-founded GAHSO with a deep commitment to building
                  systems that serve the most vulnerable. His strategic vision and experience in
                  organizational development have been central to shaping GAHSO's growth from a
                  community initiative into a credible, impact-driven Public Benefit Organization
                  with a presence in Kenya and the United Kingdom.
                </p>
              </div>
              {/* Image — right on desktop */}
              <div className="flex justify-center order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-primary/10" />
                  <img
                    src={coFounderImg}
                    alt="Peter Gregory Odhiambo — Co-Founder, GAHSO"
                    className="relative w-72 md:w-80 rounded-2xl object-cover shadow-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="py-20 bg-background">
          <div className="container-wide section-padding max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                The Road Ahead
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Looking Ahead
              </h2>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                We are operating in a context shaped by persistent public health challenges,
                recurring humanitarian crises, climate shocks, and increasing displacement across
                many of the communities where we work in Africa. These realities continue to place
                significant pressure on already vulnerable populations, particularly young people
                and women who remain disproportionately affected by poor health outcomes,
                unemployment, and limited access to essential services.
              </p>
              <p>
                GAHSO's work is guided by a clear focus on its target population — vulnerable and
                underserved communities, especially youth, adolescent girls and boys, displaced
                families, and marginalized households living in fragile and resource-constrained
                settings. These groups continue to face intersecting challenges that require
                integrated responses linking public health, awareness, protection, and sustainable
                livelihood support.
              </p>
              <p>
                At GAHSO, we remain committed to delivering community-driven and youth-led solutions
                that respond directly to these realities. We continue to strengthen partnerships,
                deepen local engagement, and invest in shared learning to ensure our interventions
                are relevant, inclusive, and impactful.
              </p>
              <p>
                Looking ahead, our focus remains on strengthening community health systems,
                expanding access to health awareness and preventive care, and empowering young
                people to take active leadership in shaping healthier and more resilient communities.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-primary/5">
          <div className="container-wide section-padding text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Rooted in Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Every milestone in our history has been guided by the four values at the heart of GAHSO.
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
