import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Modal from "@/components/Modal";
import {StoreProvider} from "@/store/Store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "WhatBytes | Home",
  description: "WhatBytes dashboard",
  icons: {
    icon: "/JPEGs/logo.jpg",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}>
        <StoreProvider>
          <div>
            <Header />
          </div>
          <div className="">
            <SideBar />
            <div className="pl-[13%]">{children}</div>
          </div>
          <Modal />
        </StoreProvider>
      </body>
    </html>
  );
}
