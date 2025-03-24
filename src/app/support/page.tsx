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
               <div className="bg-black">
                    <Header />
                    <SupportPage />
                    <Footer />
               </div>
          </>
     );
}