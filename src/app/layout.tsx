import type { Metadata } from "next";
import "./globals.css";
import Aside from "@/components/Aside";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import { Prompt } from 'next/font/google'

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
  // display: 'optional' | 'block' | 'swap' | 'fallback' | 'auto'
  // - 'optional': If the font is available, use it. Otherwise,
  //   behave as if no font was specified.
  // - 'block': Attempt to load the font, even if it's not yet
  //   available. If the font can't be loaded, display nothing.
  // - 'swap': Use a fallback font until the requested font is
  //   available. When the requested font becomes available, swap
  //   to it. This is the default behavior.
  // - 'fallback': Use a fallback font. If the requested font is
  //   available, don't use it. This can be useful if you want to
  //   use a more modern font, but still support older browsers.
  // - 'auto': The browser will automatically decide when to load
  //   the font and when to use a fallback font. This is the
  //   default behavior if 'display' is not specified.
})

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
