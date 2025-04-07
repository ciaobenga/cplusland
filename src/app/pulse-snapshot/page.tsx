import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import PulseSnapshotPage from "@/sections/PulseSnapshot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse Snapshot - Circle+",
};

export default function PulseSnapshot() {
     return (
          <>
               <div className="bg-[linear-gradient(210deg,rgba(190,8,255,0.2),#000000,#000000,rgba(4,249,255,0.2))]">
                    <Header />
                    <PulseSnapshotPage />
                    <Footer />
               </div>
          </>
     );
}