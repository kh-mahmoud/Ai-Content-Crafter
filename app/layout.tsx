import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

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
         <head>
        <meta
          name="monetag"
          content="d02132b02003dd4231612a3ff4116073"
        />
      </head>
        <body className={`${poppins.variable}  antialiased`}>
          {children}
          <Toaster
            richColors
            position="bottom-right"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
