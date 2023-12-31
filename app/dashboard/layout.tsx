import { getServerSession } from "next-auth";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/topbar";
import { options } from "@/lib/nextAuthOptions";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  if (!session || !session.user.isAdmin) {
    redirect("/");
  }

  return (
    <div className="flex">
      <Topbar />
      <div className="hidden h-screen md:block w-60 border-r flex-shrink-0">
        <div className="fixed h-full w-60">
          <Sidebar />
        </div>
      </div>
      <main className="w-full h-full pt-14">{children}</main>
    </div>
  );
}
