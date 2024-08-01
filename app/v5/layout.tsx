import Sidebar from "@/components/v1/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Layout V5",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="main-wrapper">
          <Sidebar />
          <main className="main-content">{children}</main>
          <Sidebar />
        </main>
      </body>
    </html>
  );
}