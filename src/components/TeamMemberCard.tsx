import { useState } from "react";
import { Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string | null;
  bio: string;
}

export const TeamMemberCard = ({ name, role, image, bio }: TeamMemberCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="card-interactive overflow-hidden group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-square overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Users className="w-16 h-16 text-muted-foreground/50" />
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-serif font-bold text-foreground mb-1 line-clamp-1">
            {name}
          </h3>
          <p className="text-primary font-medium text-sm mb-2">
            {role}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {bio}
          </p>
          <span className="text-primary text-xs font-medium mt-3 inline-block hover:underline">
            Read more →
          </span>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                )}
              </div>
              <div>
                <DialogTitle className="text-xl font-serif font-bold text-foreground">
                  {name}
                </DialogTitle>
                <p className="text-primary font-medium text-sm mt-1">
                  {role}
                </p>
              </div>
            </div>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground leading-relaxed">
              {bio}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
