import { Header } from "@/sections/Header";
import TermsOfService from "@/sections/TermsofService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Circle+",
};

export default function Terms() {
     return (
          <>
               <div className="bg-black">
                    <Header />
                    <TermsOfService />
               </div>
          </>
     );
}