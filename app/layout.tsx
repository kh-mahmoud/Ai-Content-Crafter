import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verbi AI",
  description:
    "Let AI help you write anything — from articles and bios to product descriptions. Simple, fast, and always creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#8b5cf6",
        },
      }}
    >
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
