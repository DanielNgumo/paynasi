import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Match weights used in Navbar
});

export const metadata: Metadata = {
  title: "PayNasi",
  description: "A platform for secure transactions",
  icons: {
    icon: [
      {
        url: 'favicon.ico',
        sizes: 'any',
      },
      {
        url: 'favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        url: 'favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    shortcut: 'favicon.ico',
    apple: 'favicon.ico', // For iOS devices
  },
  // Optional: Add more metadata for better SEO
  metadataBase: new URL('https://paynasi.com'), // Replace with your actual domain
  openGraph: {
    title: 'PayNasi',
    description: 'A platform for secure transactions',
    images: ['/images/logo.jpg'], // Use your logo for social sharing
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayNasi',
    description: 'A platform for secure transactions',
    images: ['/images/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <div className="font-inter">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}