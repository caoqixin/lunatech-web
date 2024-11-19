import { SignInCard } from "@/views/auth/components/sign-in-card";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await getLoggedInUser();

  if (user) redirect("/");

  return <SignInCard />;
}
