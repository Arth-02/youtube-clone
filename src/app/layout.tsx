import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarContextProvider from "./Provider/SidebarContextProvider";
import "./globals.css";
import AuthProvider from "./Provider/AuthProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={" h-screen flex justify-center"}>
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
