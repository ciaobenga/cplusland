import { ChartSection } from "@/sections/ChartSection";
import { CTASection } from "@/sections/CTASection";
import { EsoProgramsSection } from "@/sections/EsoPrograms";
import { Features } from "@/sections/Features";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import  { PricingSection }  from "@/sections/Pricing";
import { Techstars } from "@/sections/Techstars";
import { TryCirclePlusSection } from "@/sections/TryCirclePlus";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Hero />
        <Techstars />
        <LogoTicker />
        <Features />
        <FeaturesSection />
        <ChartSection />
        <PricingSection />
        <EsoProgramsSection />
        <CTASection />
        <TryCirclePlusSection />
        <Footer />
      </div>
    </>
  );
}
