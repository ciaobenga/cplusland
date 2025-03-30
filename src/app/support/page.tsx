import FaqSection from "@/components/support/faq-section";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import SupportPage from "@/sections/SupportPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Hub - Circle+",
};

export default function Terms() {
     return (
          <>
               <div className="bg-[linear-gradient(210deg,rgba(190,8,255,0.2),#000000,#000000,rgba(4,249,255,0.2))]">
                    <Header />
                    <SupportPage />
                    <Footer />
               </div>
          </>
     );
}