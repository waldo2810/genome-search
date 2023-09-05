import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genoma Search",
  description: "Find anybody in the torre network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark:bg-foreground dark:text-secondary",
          inter.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
