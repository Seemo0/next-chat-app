import { supabaseServer } from "@/lib/supabase/server";
import { Suspense } from "react";
import ListMessages from "./ListMessages";
import { LIMIT_MESSAGE } from "@/lib/constants";
import InitMessages from "@/lib/store/initMessages";

export default async function ChatMessages() {
  const supabase = supabaseServer();

  const { data } = await supabase
    .from("messages")
    .select("*,users(*)")
    .range(0, LIMIT_MESSAGE)
    .order("created_at", { ascending: false });

  console.log("data msgs====>", data);

  return (
    <Suspense fallback={"loading.."}>
      <ListMessages />
      <InitMessages messages={data?.reverse() || []} />
    </Suspense>
  );
}
