import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEMA - Startup Inovatif",
  description: "Wujudkan Ide Bisnis Anda Menjadi Kenyataan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}