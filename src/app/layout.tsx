import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Saas Template - EldoraUI",
  description:
    "The EldoraUI SaaS Template is designed specifically for SaaS applications, offering a sleek and modern interface with a built-in dark theme. This template provides an efficient starting point for developing scalable and customizable software solutions, integrating essential features to enhance the user experience. With a clean design and responsive layout, it is ideal for building professional applications that focus on both functionality and aesthetic appeal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
