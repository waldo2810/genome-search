import Bookmarked from "@/components/bookmarked";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <main className="w-full flex h-screen flex-col items-center justify-start py-10 md:py-32">
      <h1 className="text-5xl font-black dark:text-[#ccdc38]">Genoma Search</h1>
      <p className="text-sm p-5 md:pb-20">Find anybody in the Torre network</p>
      <div className="w-[90%] md:w-3/4 lg:1/2">
        <Bookmarked />
        <SearchBar />
      </div>
    </main>
  );
}
