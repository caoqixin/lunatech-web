import { SupplierPage } from "@/views/supplier/supplier-page";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getLoggedInUser();

  if (!user) redirect("/sign-in");

  return <SupplierPage />;
}
