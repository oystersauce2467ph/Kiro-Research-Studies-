import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiro Research Studies",
  description: "High-converting dashboard powered by Supabase + Sanity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
