import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Loading() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <ArrowPathIcon className="h-12 w-12 animate-spin text-gray-004" />
        <p className="text-gray-004 text-xl font-medium leading-10 tracking-wider">
          Loading
        </p>
      </div>
    </section>
  );
}
