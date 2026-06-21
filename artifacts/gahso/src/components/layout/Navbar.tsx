import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Impact", path: "/impact" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Contact", path: "/contact" },
];

const aboutLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our History", path: "/our-history" },
];

const allAboutPaths = aboutLinks.map(l => l.path);

const tatuaInitiativeLinks = [
  { name: "TaTua Farms", path: "/tatua-farms" },
  { name: "TaTua Salon", path: "/tatua-salon" },
  { name: "MloFlow", path: "/mloflow" },
];

const fundedProjectLinks = [
  { name: "Youth Voice (GE-FS)", path: "/youth-voice" },
  { name: "Digital Inclusion (CUDI-GW)", path: "/digital-inclusion" },
  { name: "The Restorers Project", path: "/restorers-project" },
];

const allProgramPaths = [
  "/programs",
  ...tatuaInitiativeLinks.map(l => l.path),
  ...fundedProjectLinks.map(l => l.path),
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Global Alliance for a Healthy Society (GAHSO)" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link
              to="/"
              className={cn(
                "text-base font-medium transition-colors hover:text-primary relative",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Home
              {location.pathname === "/" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-base font-medium transition-colors hover:text-primary relative flex items-center gap-1 outline-none",
                allAboutPaths.some(p => location.pathname === p)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
                About
                <ChevronDown className="w-4 h-4" />
                {allAboutPaths.some(p => location.pathname === p) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.path && "text-primary font-medium"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-base font-medium transition-colors hover:text-primary relative flex items-center gap-1 outline-none",
                allProgramPaths.some(p => location.pathname === p)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
                Programs
                <ChevronDown className="w-4 h-4" />
                {allProgramPaths.some(p => location.pathname === p) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    to="/programs"
                    className={cn(
                      "w-full cursor-pointer",
                      location.pathname === "/programs" && "text-primary font-medium"
                    )}
                  >
                    Thematic Programmes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    <span>TaTua Initiative</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    {tatuaInitiativeLinks.map((link) => (
                      <DropdownMenuItem key={link.path} asChild>
                        <Link
                          to={link.path}
                          className={cn(
                            "w-full cursor-pointer",
                            location.pathname === link.path && "text-primary font-medium"
                          )}
                        >
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    <span>Funded Projects</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-56">
                    {fundedProjectLinks.map((link) => (
                      <DropdownMenuItem key={link.path} asChild>
                        <Link
                          to={link.path}
                          className={cn(
                            "w-full cursor-pointer",
                            location.pathname === link.path && "text-primary font-medium"
                          )}
                        >
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary relative",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/get-involved">Volunteer</Link>
            </Button>
            <Button variant="donate" size="sm" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors py-2",
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                Home
              </Link>

              {/* About Section */}
              <div className="py-2">
                <span className="text-base font-medium text-foreground">About</span>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium transition-colors py-1",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Programs Section */}
              <div className="py-2">
                <span className="text-base font-medium text-foreground">Programs</span>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    to="/programs"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors py-1",
                      location.pathname === "/programs"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Thematic Programmes
                  </Link>
                  
                  {/* TaTua Initiative Submenu */}
                  <div className="py-1">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      TaTua Initiative
                    </span>
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {tatuaInitiativeLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-sm font-medium transition-colors py-1",
                            location.pathname === link.path
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Funded Projects Submenu */}
                  <div className="py-1">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      Funded Projects
                    </span>
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {fundedProjectLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-sm font-medium transition-colors py-1",
                            location.pathname === link.path
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <Link to="/get-involved" onClick={() => setIsOpen(false)}>
                    Volunteer
                  </Link>
                </Button>
                <Button variant="donate" asChild>
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
