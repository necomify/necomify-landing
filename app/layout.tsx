import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NECOMIFY - Create your own E-Commerce store in minutes",
  description:
    "Necomify is a modern, fast, and easy-to-use E-Commerce platform that helps you build your online store in minutes.",
  keywords:
    "E-commerce, Next.js, online store, dropshipping, SaaS, web development, Necomify",
  authors: [{ name: "Necomify Team" }],
  creator: "Necomify Team",
  openGraph: {
    title: "NECOMIFY - Create your own E-Commerce store in minutes",
    description:
      "Necomify is a modern, fast, and easy-to-use E-Commerce platform that helps you build your online store in minutes.",
    url: "https://necomify.com",
    siteName: "NECOMIFY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NECOMIFY E-Commerce Boilerplate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@necomify_com",
    creator: "@necomify_com",
    title: "NECOMIFY - Create your own E-Commerce store in minutes",
    description:
      "Necomify is a modern, fast, and easy-to-use E-Commerce platform that helps you build your online store in minutes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NECOMIFY E-Commerce Boilerplate",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[85vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
