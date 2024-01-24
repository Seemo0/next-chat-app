"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LiveChat from "./LiveChat";

const ChatHeader = ({ user }: { user?: any }) => {
  const router = useRouter();

  console.log("user=====>", user);

  const handleLoginWithGoogle = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL,
      },
    });
  };

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <LiveChat />
        </div>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={handleLoginWithGoogle}>Login</Button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
