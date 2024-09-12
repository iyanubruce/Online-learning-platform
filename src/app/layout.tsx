import type { Metadata } from "next";
import { Saira } from "@next/font/google";
import { Rowdies } from "@next/font/google";
import "./globals.css";
import SessionProv from "@/components/SessionProvider/sessionProvider";
const saira = Saira({ subsets: ["latin"], variable: "--font-Saira" });
const rowdies = Rowdies({
  weight: ["300", "400", "700"], // Pass an array of weights
  variable: "--font-rowdies",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Online Learning Platform",
  description: "Online Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${rowdies.variable} flex flex-col items-center `}>
        <SessionProv>{children}</SessionProv>
      </body>
    </html>
  );
}
