"use client";

import ChatIcon from "./ChatIcon";
import { Button } from "./ui/button";

const ChatHeader = ({ user }: { user?: any }) => {
  const handleLoginWithGoogle = () => {};

  const handleLogout = () => {};

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
