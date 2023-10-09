import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

const Topbar = async  () => {

  return (
    <nav className="flex justify-between items-center px-3 py-3 z-50 bg-gray-900 fixed top-0 left-0 w-full">
      <h1 className="text-3xl font-bold">Stream</h1>
      <div className="w-1/2 flex justify-center items-center">
        {/* <Input placeholder="search" className="text-black font-bold" /> */}
        <p>Enjoy Kanka!!</p>
      </div>
      <div className="mr-2 flex justify-center items-center gap-3">
        <p>Umme Ruman</p>
      </div>
    </nav>
  );
};

export default Topbar;
