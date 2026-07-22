import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const OurHistory = lazy(() => import("./pages/OurHistory"));
const Programs = lazy(() => import("./pages/Programs"));
const TatuaFarms = lazy(() => import("./pages/TatuaFarms"));
const MloFlow = lazy(() => import("./pages/MloFlow"));
const TatuaSalon = lazy(() => import("./pages/TatuaSalon"));
const YouthVoice = lazy(() => import("./pages/YouthVoice"));
const DigitalInclusion = lazy(() => import("./pages/DigitalInclusion"));
const RestorersProject = lazy(() => import("./pages/RestorersProject"));
const InnovHubs = lazy(() => import("./pages/InnovHubs"));
const Impact = lazy(() => import("./pages/Impact"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/tatua-farms" element={<TatuaFarms />} />
            <Route path="/mloflow" element={<MloFlow />} />
            <Route path="/tatua-salon" element={<TatuaSalon />} />
            <Route path="/youth-voice" element={<YouthVoice />} />
            <Route path="/digital-inclusion" element={<DigitalInclusion />} />
            <Route path="/restorers-project" element={<RestorersProject />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
