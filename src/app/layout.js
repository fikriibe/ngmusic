import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid place-items-center min-h-[100vh]">
          <div className="max-w-[340px] w-full h-full">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}