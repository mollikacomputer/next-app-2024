import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/about"> <button className="btn btn-accent"> About </button> </Link>
        <Link href="/contact"> <button className="btn btn-accent"> Contact </button> </Link>
        <Link href="/news/articles"> <button className="btn btn-accent"> Article </button> </Link>
        <Link href="/news/blogs"> <button className="btn btn-accent"> Blog </button> </Link>
        <Link href="/"> <button className="btn btn-accent"> Home </button> </Link>
        {children}
        </body>
    </html>
  );
}
