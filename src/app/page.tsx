import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductPreview from "@/components/ProductPreview";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductPreview />
      <Features />
      <SocialProof />
      <Waitlist />
      <Footer />
    </main>
  );
}
