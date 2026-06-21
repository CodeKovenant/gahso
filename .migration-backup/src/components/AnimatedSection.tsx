import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AnimationType = 
  | "fade-in" 
  | "slide-up" 
  | "slide-down" 
  | "slide-left" 
  | "slide-right" 
  | "scale-in" 
  | "bounce-in" 
  | "blur-in";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-in": "animate-fade-in",
  "slide-up": "animate-slide-up",
  "slide-down": "animate-slide-down",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "scale-in": "animate-scale-in",
  "bounce-in": "animate-bounce-in",
  "blur-in": "animate-blur-in",
};

export function AnimatedSection({ 
  children, 
  animation = "slide-up", 
  delay = 0,
  className = "",
  threshold = 0.1 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-300",
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        animationDelay: `${delay}s`,
      }}
    >
      <div className={isVisible ? animationClasses[animation] : ""}>
        {children}
      </div>
    </div>
  );
}

interface AnimatedListProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedList({ 
  children, 
  animation = "slide-up",
  staggerDelay = 0.1,
  className = "",
  itemClassName = ""
}: AnimatedListProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-opacity",
            itemClassName,
            isVisible ? animationClasses[animation] : "opacity-0"
          )}
          style={{
            animationDelay: `${index * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
