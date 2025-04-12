
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Index from "./pages/Index";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>Aahaar Setu - Connecting Surplus to Smiles</title>
      <meta name="description" content="Aahaar Setu bridges the gap between food surplus and hunger, creating a community of sharing and sustainability." />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request" element={<Request />} />
          {/* Add these routes as they get implemented */}
          {/* <Route path="/rewards" element={<Rewards />} /> */}
          {/* <Route path="/community" element={<Community />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
