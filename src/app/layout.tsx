import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StytchProvider from "@/components/StytchProvider";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });


export const metadata: Metadata = {
  title: {
    absolute: config.app.metadata.title.absolute,
    default: config.app.metadata.title.default,
    template: config.app.metadata.title.template,
  },
  description: config.app.metadata.description,
  openGraph: {
    title: config.app.metadata.title.default,
    description: config.app.metadata.description,
    images: [
      signOgImageUrl({
        title: config.app.name,
      }),
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <StytchProvider>
        <html lang="en">
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased max-w-6xl m-auto",
              fontSans.variable
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main>{children}</main>
            </ThemeProvider>
          </body>
        </html>
      </StytchProvider>
  );
}
