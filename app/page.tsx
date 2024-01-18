import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  console.log("data====>", data.session?.user);

  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className=" h-full border rounded-md flex flex-col relative">
        <ChatHeader user={data?.session?.user} />
      </div>
    </div>
  );
}
