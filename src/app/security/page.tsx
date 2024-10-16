import { Header } from "@/sections/Header";
import SecurityPolicy from "@/sections/SecurityPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy - Circle+",
};

export default function Terms() {
     return (
          <>
               <div className="bg-black">
                    <Header />
                    <SecurityPolicy />
               </div>
          </>
     );
}