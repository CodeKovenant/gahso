import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { 
  Flag, 
  Users, 
  Heart, 
  Globe, 
  Rocket, 
  Award, 
  Star,
  LucideIcon 
} from "lucide-react";

interface Milestone {
  year: string;
  event: string;
  icon: LucideIcon;
  color: string;
}

const milestones: Milestone[] = [
  { 
    year: "2016", 
    event: "GAHSO founded in Kenya by passionate young leaders",
    icon: Flag,
    color: "bg-orange-500"
  },
  { 
    year: "2017", 
    event: "Launched first Youth Empowerment Program with mentorship initiatives",
    icon: Users,
    color: "bg-teal-500"
  },
  { 
    year: "2018", 
    event: "Introduced Women's Empowerment and Disability Inclusion programs",
    icon: Heart,
    color: "bg-purple-500"
  },
  { 
    year: "2019", 
    event: "Partnered with SDSN Youth as a member organization",
    icon: Globe,
    color: "bg-blue-500"
  },
  { 
    year: "2020", 
    event: "Expanded community transformation programs during global pandemic",
    icon: Rocket,
    color: "bg-green-500"
  },
  { 
    year: "2022", 
    event: "Completed 50+ projects impacting vulnerable communities",
    icon: Award,
    color: "bg-red-500"
  },
  { 
    year: "2024", 
    event: "Reached 100,000+ people served with 500+ volunteers",
    icon: Star,
    color: "bg-amber-500"
  },
];

function TimelineItem({ 
  milestone, 
  index, 
  isVisible,
  total
}: { 
  milestone: Milestone; 
  index: number; 
  isVisible: boolean;
  total: number;
}) {
  const isEven = index % 2 === 0;
  const Icon = milestone.icon;
  
  return (
    <div 
      className={cn(
        "relative flex items-center transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0",
        // On desktop, alternate above/below
        "md:flex-col md:flex-1 md:min-w-0"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: isVisible ? "translateY(0)" : "translateY(20px)"
      }}
    >
      {/* Content card - positioned above or below based on even/odd */}
      <div 
        className={cn(
          "hidden md:block h-28 lg:h-32 w-full px-1",
          isEven ? "md:order-1 md:mb-2" : "md:order-3 md:mt-2"
        )}
      >
        <div 
          className={cn(
            "p-3 lg:p-4 rounded-xl bg-card shadow-md border border-border/50 h-full",
            "hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300",
            "flex flex-col justify-center"
          )}
        >
          <h4 className="font-semibold text-xs lg:text-sm mb-1">
            <span className={cn(
              "bg-gradient-to-r bg-clip-text text-transparent",
              milestone.color === "bg-orange-500" && "from-orange-500 to-orange-600",
              milestone.color === "bg-teal-500" && "from-teal-500 to-teal-600",
              milestone.color === "bg-purple-500" && "from-purple-500 to-purple-600",
              milestone.color === "bg-blue-500" && "from-blue-500 to-blue-600",
              milestone.color === "bg-green-500" && "from-green-500 to-green-600",
              milestone.color === "bg-red-500" && "from-red-500 to-red-600",
              milestone.color === "bg-amber-500" && "from-amber-500 to-amber-600",
            )}>
              {milestone.year}
            </span>
          </h4>
          <p className="text-muted-foreground text-[10px] lg:text-xs leading-relaxed line-clamp-3">
            {milestone.event}
          </p>
        </div>
      </div>

      {/* Connector line from card to icon */}
      <div 
        className={cn(
          "hidden md:block w-0.5 h-4 lg:h-6",
          milestone.color,
          isEven ? "md:order-2" : "md:order-2"
        )}
      />

      {/* Icon circle */}
      <div 
        className={cn(
          "relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-card shadow-lg border-4 flex items-center justify-center",
          "hover:scale-110 transition-transform duration-300 cursor-pointer group",
          "shrink-0 md:order-2"
        )}
      >
        <div 
          className={cn(
            "w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center",
            milestone.color,
            "group-hover:animate-pulse"
          )}
        >
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </div>
      </div>

      {/* Year label (on opposite side of content on desktop) */}
      <div 
        className={cn(
          "hidden md:flex h-6 items-center justify-center",
          isEven ? "md:order-3 md:mt-1" : "md:order-1 md:mb-1"
        )}
      >
        <span className="text-sm lg:text-base font-bold text-foreground">{milestone.year}</span>
      </div>

      {/* Mobile-only content */}
      <div className="md:hidden flex-1 ml-4">
        <h4 className={cn(
          "font-bold text-base mb-1",
          "bg-gradient-to-r bg-clip-text text-transparent",
          milestone.color === "bg-orange-500" && "from-orange-500 to-orange-600",
          milestone.color === "bg-teal-500" && "from-teal-500 to-teal-600",
          milestone.color === "bg-purple-500" && "from-purple-500 to-purple-600",
          milestone.color === "bg-blue-500" && "from-blue-500 to-blue-600",
          milestone.color === "bg-green-500" && "from-green-500 to-green-600",
          milestone.color === "bg-red-500" && "from-red-500 to-red-600",
          milestone.color === "bg-amber-500" && "from-amber-500 to-amber-600",
        )}>
          {milestone.year}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {milestone.event}
        </p>
      </div>
    </div>
  );
}

export function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Milestones Along the Way
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative px-2">
          {/* Horizontal connecting line - positioned at the icon center */}
          <div 
            className={cn(
              "absolute left-4 right-4 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-amber-500 rounded-full",
              "transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            )}
            style={{ 
              transformOrigin: 'left center',
              top: 'calc(50% + 1rem)' // Adjust to align with icons
            }}
          />
          
          {/* Timeline items */}
          <div className="flex items-stretch relative gap-1">
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={milestone.year} 
                milestone={milestone} 
                index={index}
                isVisible={isVisible}
                total={milestones.length}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div 
            className={cn(
              "absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-purple-500 to-amber-500 rounded-full",
              "transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            )}
            style={{ transformOrigin: 'top center' }}
          />
          
          {/* Timeline items */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={milestone.year} 
                milestone={milestone} 
                index={index}
                isVisible={isVisible}
                total={milestones.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
