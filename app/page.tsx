import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { Navbar } from "@/src/components/Navbar";
import { WaitlistForm } from "@/src/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
