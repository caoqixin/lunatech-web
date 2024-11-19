import { CreateSupplierModal } from "@/views/supplier/components/create-supplier-modal";
import { Navbar } from "@/components/custom/ui/navbar";
import { Sidebar } from "@/components/custom/ui/sidebar";
import { Separator } from "@/components/ui/separator";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <CreateSupplierModal />
      <div className="flex w-full -h-full">
        <div className="fixed lef-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <Separator className="my-2" />
            <main className="h-full py-2 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
