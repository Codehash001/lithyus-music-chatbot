import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-center items-center py-2 border-b shadow-xl rounded-md">
      <div className="text-white text-lg flex space-x-2 justify-center items-center">
        <span className="rounded-full lex items-center justify-center">
          <div className=" w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        </span>
        <span>
        AI assistant of Lithyus Music
        </span>
        </div>
    </div>
  );
}
