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
        <body className={`${poppins.variable}  antialiased`}>
          {children}
          <Toaster
            // toastOptions={{
            //   classNames: {
            //     error: "bg-background border-border text-muted",
            //     loading: "bg-background border-border text-muted-foreground",
            //   },
            // }}
            richColors
            position="bottom-right"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
