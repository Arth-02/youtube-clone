import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarContextProvider from "./Provider/SidebarContextProvider";
import "./globals.css";
import AuthProvider from "./Provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className + " h-screen flex justify-center"}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AuthProvider>
            <SidebarContextProvider>
              <Header />
              <Sidebar />
              {children}
            </SidebarContextProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
