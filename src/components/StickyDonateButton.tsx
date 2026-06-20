import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyDonateButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <Button
        variant="donate"
        size="lg"
        asChild
        className="rounded-full shadow-xl px-6"
      >
        <Link to="/donate" className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Donate
        </Link>
      </Button>
    </div>
  );
}
