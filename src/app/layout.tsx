import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Search Engine",
  description: "Iyanuoluwa Pelumi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}


        {/* Footer */}
        <footer className="bg-gray-200 text-center py-4 bottom-0 w-full">
          <p className="text-gray-600"> © Iyanuoluwa Pelumi. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
