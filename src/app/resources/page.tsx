import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { ResourcesPage } from "@/sections/ResourcePage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Circle+",
};

export default function Privacy() {
     return (
          <>
               <div className="bg-black">
                    <Header />
                    <ResourcesPage />
                    <Footer />
               </div>
          </>
     );
}