import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import CustomScrollbarProvider from "@/Providers/CustomScrollBar";

const raleway = Raleway({ subsets: ["latin"] });
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Circle+",
  description: "Streamline Metrics for Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity tracking script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oo61hlv9sx");
            `,
          }}
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body
        className={twMerge(raleway.className, "antialiased")}
      >
        <ThemeProvider>
          <CustomScrollbarProvider>
            {children}
          </CustomScrollbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
