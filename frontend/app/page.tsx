import Image from "next/image";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-3/4 gap-4 m-4">
          <PostCard />
        </div>
      </div>
    </>
  );
}
