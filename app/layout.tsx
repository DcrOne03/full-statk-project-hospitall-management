import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@radix-ui/react-tooltip";


// Sử dụng font Poppins với nhiều trọng lượng
const poppinsFont = Poppins({
  weight: ['100', '400', '500', '600', '900'],
  subsets: ['latin'],
  variable: '--font-poppins', // Tạo biến CSS cho font
});

// Metadata cho trang
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root layout dựa trên vai trò của người dùng
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
