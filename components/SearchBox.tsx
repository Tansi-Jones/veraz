"use client";

import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StyleProp {
  boxStyle?: string;
  inputStyle?: string;
  buttonStyle?: string;
  queryBox?: string;
  queryBoxItem?: string;
}

export const SearchBox = ({
  boxStyle,
  inputStyle,
  buttonStyle,
  queryBox,
  queryBoxItem,
}: StyleProp) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search veraz");
  const [isMicActive, setIsMicActive] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPlaceholder("Search veraz");
  };

  const handleActivateMicrophone = () => {
    setIsMicActive(!isMicActive);

    if (isMicActive) {
      setPlaceholder("Search veraz");
    } else {
      setPlaceholder("Speak now ...");
    }
  };

  const handleClearSearchInput = () => {
    setSearchTerm("");
    setPlaceholder("Search veraz");
  };

  const handleSelectedSearch = () => {
    setSearchTerm("The climate change hoax in 2022");
    router.push(`/search/${searchTerm}}`);
  };

  return (
    <>
      <section
        id="searchBox"
        className={`relative flex items-center justify-between space-x-3 lg:space-x-5 border border-gray-006 dark:border-gray-009 rounded-full pl-4 pr-1 py-1 ${boxStyle}`}
      >
        <MagnifyingGlassIcon className="text-gray-006 font-bold h-7 w-7" />
        <input
          type="text"
          name="search"
          value={searchTerm}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`${inputStyle} searchInput outline-none border-none bg-transparent w-full font-normal text-gray-004 dark:text-gray-002 placeholder:text-gray-006`}
        />
        {searchTerm ? (
          <button
            className="cursor-pointer h-10 w-10"
            onClick={handleClearSearchInput}
          >
            <XMarkIcon className="text-gray-006" />
          </button>
        ) : (
          <button
            className="cursor-pointer h-7 w-7"
            onClick={handleActivateMicrophone}
          >
            <MicrophoneIcon className="text-gray-006" />
          </button>
        )}

        <button
          className={`${buttonStyle} bg-primary hover:bg-opacity-90 cursor-pointer rounded-full flex items-center justify-center`}
        >
          <ArrowRightIcon className="h-4 lg:h-6 w-4 lg:w-6 text-light" />
        </button>

        <div
          className={`${queryBox} bg-light dark:bg-gray-009 px-3 py-3 rounded-xl absolute w-full right-0 space-y-1 ${
            searchTerm ? "block" : "hidden"
          }`}
        >
          <div
            className="flex items-center space-x-5 hover:cursor-pointer hover:bg-gray-005 dark:hover:bg-zinc-700 hover:bg-opacity-60 hover:rounded-md p-1"
            onClick={handleSelectedSearch}
          >
            <MagnifyingGlassIcon className="text-gray-006 font-bold h-5 w-5" />
            <p className={`${queryBoxItem} font-normal text-gray-006`}>
              The climate change hoax in 2022
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
