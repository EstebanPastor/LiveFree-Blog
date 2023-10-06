import "./globals.css";
import type { Metadata } from "next";
import NextAuthProvider from "@/providers/next-auth-provider";
import NextThemeProvider from "@/providers/theme-provider";
import GlobalState from "@/context";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "NEXT Blog",
  description: "Created by Esteban Pastor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <Header />
              {children}
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
