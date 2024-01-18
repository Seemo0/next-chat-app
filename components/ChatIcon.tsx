import React from "react";

const ChatIcon = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
      <h1 className="text-sm text-gray-400">onlines</h1>
    </div>
  );
};

export default ChatIcon;
