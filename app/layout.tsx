import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Tricks - Web Development Blog",
  description: "A modern web development blog featuring tutorials, tips, and tricks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
