
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SidebarProvider >
      <main className="flex w-full">
        {<AppSidebar/>}
        <div className="flex-1 w-full min-h-screen min-w-0">
          <Navbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
