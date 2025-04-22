import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import IntegrationsPage from "@/sections/IntegrationsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connections - Circle+",
};

export default function Connections() {
     return (
          <>
               <div className="bg-black bg-[linear-gradient(210deg,rgba(190,8,255,0.5),#000000,#000000,#000000,#000000,#000000,rgba(4,249,255,0.5))]">
                    <Header />
                    <IntegrationsPage />
                    <Footer />
               </div>
          </>
     );
}