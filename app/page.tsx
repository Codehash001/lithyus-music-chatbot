import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="h-screen max-w-2xl flex flex-col justify-center items-center px-2 py-10 overflow-hidden bg-gradient-to-r from-rose-600 from-15% via-red-600 via-55% to-red-700 no-scrollbar border rounded-md">
      <Header/>
        <div className="h-full w-full flex">
          <ChatSection />
      </div>
    </main>
  );
}
