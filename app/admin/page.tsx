import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AdminDashboard from "@/components/admin/admin-dashboard";

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  // If not authenticated, redirect to login
  if (!session) {
    redirect("/admin/login");
  }
  
  return <AdminDashboard user={session.user} />;
}