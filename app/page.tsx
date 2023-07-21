import { SearchBox } from "@/components/SearchBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[90%] mx-auto">
      <nav className="flex items-center justify-between my-5">
        <div className="relative w-10 mr-5 lg:mr-0">
          <Image
            className="relative dark:invert"
            src="/logo/veraz-round.svg"
            alt="veraz.wiki Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="flex items-center space-x-5">
          <Link
            href="/articles"
            className="text-base lg:text-lg hover:underline text-gray-004 dark:text-gray-006"
          >
            Articles
          </Link>
        </div>
      </nav>

      <section className="max-w-[40rem] mx-auto space-y-7 my-44">
        <div className="relative w-44 lg:w-72 mx-auto flex items-center justify-center">
          <Image
            className="relative dark:invert"
            src="/logo/veraz.svg"
            alt="veraz.wiki Logo"
            width={400}
            height={400}
            priority
          />
        </div>
        <SearchBox
          inputStyle="text-lg py-2 lg:py-3 px-2"
          buttonStyle="p-3"
          queryBox="top-[4.5rem]"
          queryBoxItem="text-lg"
        />
        <p className="text-gray-004 dark:text-gray-006 text-base truncateText">
          Check out all articles on veraz{" "}
          <span className="text-primary">
            <Link href="/articles">here</Link>
          </span>
        </p>
      </section>
    </main>
  );
}
