import { Analytics } from "@vercel/analytics/next"
import { Inter, Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-regular",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, instrumentSerif.variable, "font-sans", geist.variable)}>
      <body
        className={`font-regular antialiased`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
