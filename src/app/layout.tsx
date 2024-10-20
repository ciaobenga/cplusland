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
