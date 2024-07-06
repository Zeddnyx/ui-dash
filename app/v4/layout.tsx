import Sidebar from "@/components/v2/sidebar";
import Navbar from "@/components/v2/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Layout V2",
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
        <main className="flex flex-row gap-2 bg-dark-100">
          <div className="w-full pl-2">
            <Navbar />
            <div className="w-full bg-dark-100 h-[calc(100vh-82px)] overflow-y-auto no-scrollbar py-2">
              {children}
            </div>
          </div>
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
