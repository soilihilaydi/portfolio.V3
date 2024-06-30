import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon Portfolio App",
  description: "Mon Portfolio version 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />  
      </head>
      <body className={inter.className}>
        
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
