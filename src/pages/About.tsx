import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Award, CheckCircle, Handshake, Scale, Heart, Briefcase } from "lucide-react";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TimelineSection } from "@/components/TimelineSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroAbout from "@/assets/hero-about-community.jpg";
import youthLedApproach from "@/assets/youth-led-approach.jpg";
import teamDaphine from "@/assets/team-daphine-auma.jpg";
import teamFrank from "@/assets/team-frank-jumba.jpg";
import teamEffie from "@/assets/team-effie-mwalo.jpg";
import leaderDaphine from "@/assets/team-daphine-auma-paul.png";
import leaderIvy from "@/assets/team-ivy-domdo.png";
import leaderMike from "@/assets/team-mike-nyabola.png";
import leaderMary from "@/assets/team-mary-nyakairu.png";
import boardDona from "@/assets/board-dona-kamia.png";
import boardJoy from "@/assets/board-joy-mboya.png";
import boardPeter from "@/assets/board-peter-gregory.png";
import boardPriscilla from "@/assets/board-priscilla-ombongi.png";
import advisoryOtelemate from "@/assets/advisory-otelemate-jacqueline.png";
import advisoryAbdi from "@/assets/advisory-abdi-roba.png";
import advisoryMartijn from "@/assets/advisory-martijn-knottnerus.png";
import advisoryMakena from "@/assets/advisory-makena-mbungu.png";
import boardBernadette from "@/assets/board-bernadette-ojao.jpg";
import teamJob from "@/assets/team-job-bunanga.jpg";
import teamAbdirahim from "@/assets/team-abdirahim-abdullahi.jpg";

// Secretariat (Staff)
const leadership = [
  {
    name: "Daphine Auma",
    role: "Executive Director",
    image: leaderDaphine,
    bio: "Daphine is the Founder, Secretary to the Board and Executive Director, providing strategic leadership and oversight for community-based programs that advance community development and women empowerment. She leads the organization's work to design, implement, and manage initiatives that promote education, social inclusion, and sustainable livelihoods for vulnerable populations, while ensuring strong partnerships, accountability, and measurable impact. Daphine has built her career through active engagement in grassroots development and has managed multi-million-dollar projects, demonstrating the ability to steward donor resources responsibly and translate funding into meaningful community outcomes. She holds a Bachelor of Education (Arts) in English and Literature from Kenyatta University. Her academic background, combined with extensive hands-on community experience, has strengthened her communication, leadership, and program management skills. Daphine is widely respected for her integrity, humility, calm leadership style, and dedication to service.",
  },
  {
    name: "Job Bunanga",
    role: "Deputy Director Programs",
    image: teamJob,
    bio: "Job Bunanga is the Deputy Director Programs at the Global Alliance for a Healthy Society (GAHSO), with expertise in strategic planning, program design, and development coordination. He supports the organization's vision by aligning projects with national and global development priorities. With a background in applied mathematics, data analytics, and software development, Job applies evidence-based and technology-driven approaches to enhance community resilience, improve livelihoods, and promote inclusive development. He has contributed to initiatives in climate resilience, food security, youth empowerment, and public participation, particularly in marginalized communities. Job is committed to advancing sustainable development through strong partnerships, data-driven decision-making, and community-centered solutions.",
  },
  {
    name: "Mike Nyabolah",
    role: "Specialist, Grants & Partnerships",
    image: leaderMike,
    bio: "Extensive experience designing, managing, and monitoring strategic grant portfolios and partner relationships within the international development sector. Excels in the end-to-end grant lifecycle, from mobilising significant funding—having secured over $15 million from diverse partners—to ensuring compliance and building capacity of local organisations for sustainable impact. Most recently managed a $40M+ co-investment grant portfolio for the USAID Africa Trade and Investment Activity. Holds a Bachelor's in Business Administration (Finance) and is pursuing an MBA in Procurement & Supply Chain Management.",
  },
  {
    name: "Mary Nyakairu",
    role: "Finance, Grants & Compliance Manager",
    image: leaderMary,
    bio: "Mary Nyakairu serves as Finance, Grants & Compliance Manager at GAHSO, providing expert oversight of financial management, grants administration, and donor compliance. A CPA-K and KCA University graduate, she brings a strong background in project accounting, financial reporting, and grant management, ensuring that GAHSO's resources are effectively and responsibly stewarded. Mary excels at maintaining accurate financial records, ensuring compliance with donor requirements, and delivering transparent and timely reporting. Widely recognized for her integrity, diligence, and professionalism, she fosters trust among colleagues, partners, and stakeholders alike. Her commitment to financial excellence and ethical stewardship strengthens GAHSO's credibility and supports the organization's mission to deliver sustainable social impact.",
  },
  {
    name: "Dr. Effie Mwalo",
    role: "Health Coordinator",
    image: teamEffie,
    bio: "Dr. Effie Mwalo serves as Health Coordinator at GAHSO, providing strategic leadership and technical oversight for programs in reproductive health, mental health, and community wellbeing. As a medical doctor, she brings clinical expertise and a strong public health perspective to the planning, implementation, and monitoring of GAHSO's health initiatives, ensuring alignment with national health priorities and the organization's mission to improve outcomes for vulnerable populations. With extensive experience in reproductive health governance, mental health support, and multi-sectoral health program management, Dr. Mwalo works closely with partners, government agencies, and local communities to strengthen service delivery, foster innovation, and implement interventions that achieve measurable, sustainable impact.",
  },
  {
    name: "Joy Anyango Mboya",
    role: "Advocacy Manager",
    image: boardJoy,
    bio: "Program management specialist with strong M&E background and over 3 years' experience providing technical and programmatic support in implementation of HIV/AIDS, Nutrition, TB, Malaria, Family Planning, vaccine preventable disease, community health and integrated health programs including WASH. Has experience in program management for all stages of project development including proposal design, grants and contracts management, implementation, monitoring and evaluations and high-level donor reporting. Holds BSc in Actuarial Science from Egerton University and currently pursuing Master's Degree in Program Management.",
  },
  {
    name: "Ivy Jillian Domdo",
    role: "Programs Coordinator",
    image: leaderIvy,
    bio: "Dedicated professional in the field of public health holding a Bachelor's degree in Community Health and Development. Currently serves as a Project Coordinator at the Global Alliance for Healthy Society, where she plays a vital role in planning, executing, and monitoring health-related initiatives. Her work focuses on promoting sustainable community development and ensuring effective health interventions are implemented with impact and integrity. Passionate about collaborative progress and building strong professional networks.",
  },
  {
    name: "Abdirahim Abdullahi",
    role: "ICT Officer",
    image: teamAbdirahim,
    bio: "Abdirahim Abdullahi is a dedicated ICT Officer, entrepreneur, and community-driven leader based in Kenya, with a strong passion for leveraging technology to create impact in society. He holds a degree in Information Technology from Kabarak University (2018–2021) and has built a solid career at the intersection of digital transformation, monitoring & evaluation, and youth empowerment. In his professional role at the Kenya Medical Laboratory Technicians and Technologists Board (KMLTTB), Abdirahim plays a key role in advancing digital systems and infrastructure. He has contributed significantly to the digitization of board operations in line with national directives, including the development and management of an online portal for CPD provider registration and professional license renewal. As a System Administrator, he ensures efficient ICT operations while supporting data-driven decision-making and regulatory compliance. Abdirahim is actively involved with AgileAspect Venture Ltd, a Monitoring and Evaluation (M&E) organization focused on delivering data-driven solutions for development projects. Through this role, he contributes to project implementation, digital systems support, and strengthening accountability frameworks to enhance impact across various initiatives. Beyond his technical career, Abdirahim is deeply committed to youth development through sports. He actively supports grassroots football initiatives and works closely with academies such as Makhale Football Academy and MAFA to nurture young talent and create pathways to professional opportunities. His efforts focus on using sports as a tool to combat social challenges such as drug abuse and extremism, particularly among youth in underserved regions like Isiolo. With a strong belief in giving back to society, Abdirahim combines his expertise in ICT, his involvement in Monitoring & Evaluation, and his passion for community service to drive meaningful change.",
  },
];

// Board Members
const boardMembers = [
  {
    name: "Dr. Makena L. Mbungu",
    role: "Chair of the Board",
    image: advisoryMakena,
    bio: "Dr. Makena L. Mbungu serves as Chair of the Board at GAHSO, providing strategic leadership and oversight to strengthen the organization's programs, governance, and overall impact. A graduate of Kenyatta University with a Bachelor's Degree in Medicine and Surgery, she currently leads the Critical Care Department at Embu Level 5 Hospital, bringing extensive expertise in healthcare management, clinical excellence, and systems strengthening. Beyond medicine, Dr. Mbungu is passionate about creative arts and personal development, leveraging diverse skills to inspire and empower communities across Kenya and the continent. Her leadership combines technical expertise, strategic vision, and a commitment to fostering innovative, people-centered solutions that enhance GAHSO's mission of community development, women empowerment, and sustainable social impact.",
  },
  {
    name: "Daphine Auma",
    role: "Founder, Secretary to the Board",
    image: leaderDaphine,
    bio: "Daphine is the Founder and Secretary to the Board, providing strategic leadership and oversight for community-based programs that advance community development and women empowerment. She has built her career through active engagement in grassroots development and has managed multi-million-dollar projects, demonstrating the ability to steward donor resources responsibly and translate funding into meaningful community outcomes. She holds a Bachelor of Education (Arts) in English and Literature from Kenyatta University.",
  },
  {
    name: "Bernadette Ojao",
    role: "Board Member",
    image: boardBernadette,
    bio: "Bernadette Ojao serves as a Board Member at GAHSO, where she contributes strategic insight and guidance to strengthen organizational initiatives and community impact. She is a social entrepreneur and founder of Wabibi Pads Limited, a social enterprise dedicated to addressing period poverty by producing affordable, reusable, and environmentally sustainable sanitary products for girls and women. Through her leadership at Wabibi Pads, Bernadette has championed menstrual equity, girls' education, and gender-responsive enterprise models across East Africa. Bernadette's work reflects her deep commitment to women's health, empowerment, and social change, having driven initiatives that have supplied menstrual health products to schools, NGOs, and local communities.",
  },
  {
    name: "Dona Kamia",
    role: "Board Member",
    image: boardDona,
    bio: "Talented and immensely creative journalist with a commitment to high-quality research and writing. Excellent in writing and reporting across a variety of platforms, including radio and online social media platforms. A team leader who values teamwork and has achieved much through collaboration. Her passion for humanity is what drives her to assist vulnerable girls in society. A leader in her own capacity who gives her best when given a task or role.",
  },
  {
    name: "Peter Gregory",
    role: "Board Member",
    image: boardPeter,
    bio: "Highly experienced financial management professional with over 5 years of experience in grants administration of more than 5 donor funds. Strong program management includes launch through closeout, human resource management, financial planning, cooperative agreement compliance, sub-award management, and reporting. Has worked with USAID, CDC, Catholic Relief Services, Uhai Eashri, and African Women Development Fund (AWDF). Proven ability to design and maintain accounting systems, prepare periodic financial reports, and supervise staff accountants. Holds degree in Business Administration with IT (Finance Option) from Maseno University and Master's Degree in Business Administration (Finance Option) from The University of Nairobi.",
  },
];

// Advisory Council
const advisoryBoard = [
  {
    name: "Dr. Priscilla Nyanchama Ombongi",
    role: "Chair, Advisory Council",
    image: boardPriscilla,
    bio: "Dr. Priscilla Nyanchama Ombongi serves as Chair of the Advisory Council at GAHSO, providing strategic guidance and governance to strengthen the organization's programs and long-term impact. She holds a Doctor of Philosophy (PhD) in Industrial Economics from Wuhan University of Technology, China, an MBA from the University of Nairobi, and a BBA with IT from Maseno University. With over ten years of experience spanning financial management, economics, administration, strategic communication, and research and development, Dr. Ombongi brings deep expertise to GAHSO's strategic decision-making and oversight. Her professional interests focus on industrial and financial development, innovation and technology, and the Sustainable Development Goals (SDGs), with a keen eye on emerging national, regional, and global trends. A passionate advocate for youth empowerment, Dr. Ombongi is dedicated to mentoring young people, helping them overcome challenges and leverage education as a pathway to success.",
  },
  {
    name: "Dr. Abdi Adan Roba, Ph.D",
    role: "Advisory Council Member",
    image: advisoryAbdi,
    bio: "Seasoned internal audit, corporate finance, risk management, quality assurance and operational efficiency, banking, financial management and organizational development professional with vast experience in banking and energy sectors in Kenya. Resource person and facilitator for executive and management development trainings at Kenya School of Monetary Studies. Holds PhD in Finance from JKUAT, MBA in Finance from University of Nairobi, and First-Class Honours in Finance from Maseno University. Certified Public Accountant (CPA), Certified Investments and Financial Analyst (CIFA), and Certified Pension Trustee.",
  },
  {
    name: "Dr. Otelemate Jacqueline",
    role: "Advisory Council Member",
    image: advisoryOtelemate,
    bio: "Holds doctorate in Leadership Studies with reference to Security and Development and Master's in Intelligence and International Security from King's College London. Research interests include leadership, natural resource governance and environment, insurgency, counter-terrorism, migration and organised crime, policing reform and emerging markets. Research Associate at African Leadership Centre, King's College London, co-founder of Bliss Aid Foundation, and Managing Partner at Topbrand Consult in Nigeria.",
  },
  {
    name: "Martijn Knottnerus",
    role: "Advisory Council Member",
    image: advisoryMartijn,
    bio: "Experienced Internal Audit Manager with a demonstrated history of working in food production industry, IT peripherals, insurance & telecommunications. Skilled in Soft controls, Enterprise Risk Management, Business Process Improvement, Auditing, and Finance. Strong internal audit, risk & compliance professional with an Executive Master of Internal Auditing focused in soft controls from University of Amsterdam.",
  },
];

const volunteers = [
  {
    name: "Frank Baker Jumba",
    role: "Disability Inclusion Volunteer",
    image: teamFrank,
    bio: "Champions programs focused on inclusivity for persons with disabilities.",
  },
];

const values = [
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We take responsibility for our actions, ensuring ethical and transparent practices in all programs and initiatives.",
    letter: "A",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We foster partnerships with members, like-minded organizations, and government departments to achieve shared goals.",
    letter: "C",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain openness in communication, decision-making, and reporting to build trust and credibility.",
    letter: "T",
  },
  {
    icon: Heart,
    title: "Respect for Human Dignity",
    description: "We value the inherent worth of every individual, promoting inclusion and equity while rejecting discrimination.",
    letter: "R",
  },
  {
    icon: Scale,
    title: "Equality and Inclusivity",
    description: "We ensure marginalized and vulnerable groups have equitable access to opportunities and representation.",
    letter: "E",
  },
  {
    icon: Users,
    title: "Positive Partnerships",
    description: "We engage in constructive, mutually beneficial partnerships to strengthen organizational impact.",
    letter: "P",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    description: "We demonstrate excellence, efficiency, and effectiveness in delivering programs and fulfilling responsibilities.",
    letter: "P",
  },
];


const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="Community unity and growth"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              heroVisible ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        </div>
        
        <div className="relative container-wide section-padding py-0">
          <div className="max-w-3xl">
            <span className={cn(
              "text-primary font-semibold uppercase tracking-wider text-sm mb-4 block transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              About Us
            </span>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Building a Healthier Society, Together
            </h1>
            <p className={cn(
              "text-xl text-muted-foreground transition-all duration-700 delay-200",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Global Alliance for a Healthy Society (GAHSO) is a youth-led NGO operating in Kenya and UK, 
              empowering marginalized communities since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={cn(
              "card-elevated p-8 md:p-10 transition-all duration-700",
              missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower marginalized communities, placing a special focus on girls, women, and youth, 
                through evidence-based programs that foster learning, provide quality healthcare, 
                and create sustainable environments.
              </p>
            </div>
            
            <div className={cn(
              "card-elevated p-8 md:p-10 transition-all duration-700 delay-200",
              missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                An equitable society where every marginalized and vulnerable individual realizes their 
                inherent human rights, leading lives of dignity, respect, and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - ACTREP */}
      <section ref={valuesRef} className="section-padding">
        <div className="container-wide">
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values are encapsulated by the acronym <span className="font-bold text-primary">ACTREP</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={cn(
                  "card-elevated p-6 text-center group transition-all duration-700",
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative w-14 h-14 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {value.letter}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Secretariat */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Secretariat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals driving change in our communities every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Board
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals guiding our strategic direction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {boardMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Expert Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Advisory Council
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished advisors providing strategic insights and expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Volunteers */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Amazing Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Volunteers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated volunteers driving change in our communities every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <TimelineSection />

      {/* Youth-Led Model */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
                What Makes Us Different
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                A Youth-Led Approach
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike traditional top-down development models, GAHSO is entirely led by young 
                people who understand the challenges facing their communities firsthand. Our 
                leadership team, board, and program staff are predominantly under 35.
              </p>
              <ul className="space-y-3">
                {[
                  "Decisions made by those who understand youth needs",
                  "Fresh perspectives and innovative solutions",
                  "Building the next generation of community leaders",
                  "Peer-to-peer mentorship and support networks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link to="/get-involved">Join Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={youthLedApproach}
                  alt="GAHSO youth leaders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-serif font-bold">85%</div>
                <div className="text-sm opacity-90">Staff under 35</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
