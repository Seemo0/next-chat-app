"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import ChatIcon from "./ChatIcon";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ChatHeader = ({ user }: { user?: any }) => {
  const router = useRouter();

  console.log("user=====>", user);

  const handleLoginWithGoogle = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
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
          <ChatIcon />
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
