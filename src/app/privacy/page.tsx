import { Header } from "@/sections/Header";
import PrivacyPolicy from "@/sections/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Circle+",
};

export default function Privacy() {
     return (
          <>
               <div className="bg-black">
                    <Header />
                    <PrivacyPolicy />
               </div>
          </>
     );
}