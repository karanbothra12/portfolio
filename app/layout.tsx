import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karan Bothra | Software Engineer",
  description:
    "Personal portfolio of Karan Bothra, a Software Engineer specializing in Next.js, React, and building efficient web solutions.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Karan Bothra",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karanbothra.com",
    siteName: "Karan Bothra Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Bothra Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
