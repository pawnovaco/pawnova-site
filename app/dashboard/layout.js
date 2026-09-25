import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
export const metadata={title:"Paw Nova Content Command Center",robots:{index:false,follow:false,nocache:true}};
export default async function DashboardLayout({children}){
  const supabase=await createClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) redirect("/login");
  return children;
}
