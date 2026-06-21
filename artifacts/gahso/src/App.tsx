import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import TatuaFarms from "./pages/TatuaFarms";
import MloFlow from "./pages/MloFlow";
import TatuaSalon from "./pages/TatuaSalon";
import YouthVoice from "./pages/YouthVoice";
import DigitalInclusion from "./pages/DigitalInclusion";
import RestorersProject from "./pages/RestorersProject";
import InnovHubs from "./pages/InnovHubs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import OurHistory from "./pages/OurHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
