import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "./data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const title = "Alex Wright — Program management, client relationships, software development";
const description =
  "Alex Wright has worked in program management at EXOS at Google and in real estate, and now builds software through Meadowlark Labs. Looking for client-facing technical roles.";

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#F7F6F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
