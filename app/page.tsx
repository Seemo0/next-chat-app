import ChatHeader from "@/components/ChatHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className=" h-full border rounded-md flex flex-col relative">
        <ChatHeader />
      </div>
    </div>
  );
}
