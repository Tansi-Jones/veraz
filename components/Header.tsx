import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <header className="flex items-center md:space-x-10 max-w-[90%] mx-auto mt-5 mb-8">
      <Link href="/">
        <div className="relative w-40 hidden md:inline-block">
          <Image
            className="relative dark:invert"
            src="/logo/veraz.svg"
            alt="veraz.wiki Logo"
            width={300}
            height={0}
            priority
          />
        </div>
      </Link>
      <Link href="/">
        <div className="relative w-11 inline-block md:hidden mr-5 lg:mr-0">
          <Image
            className="relative dark:invert"
            src="/logo/veraz-round.svg"
            alt="veraz.wiki Logo"
            width={100}
            height={0}
            priority
          />
        </div>
      </Link>
      <SearchBox
        boxStyle="w-full md:w-2/4"
        inputStyle="text-base py-1 px-2"
        buttonStyle="p-2"
        queryBox="top-14"
        queryBoxItem="text-base"
      />
    </header>
  );
};
