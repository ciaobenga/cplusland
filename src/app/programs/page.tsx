import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import ProgramsPage from "@/sections/Programs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs - Circle+",
};

export default function Terms() {
     return (
          <>
               <div className="bg-black bg-[linear-gradient(210deg,rgba(190,8,255,0.5),#000000,#000000,#000000,#000000,#000000,rgba(4,249,255,0.5))]">
                    <Header />
                    <ProgramsPage />
                    <Footer />
               </div>
          </>
     );
}