import TabNav from "@/components/TabNav";
import VideoCard from "@/components/VideoCard";

export default function Home() {

  return (
    <main className="h-auto w-full mt-14 px-2 pb-0 overflow-y-auto ">
      <TabNav />
      <div className=" w-full p-2 px-5 pt-4 flex flex-wrap gap-5 gap-y-8 ">
        {Array(20)
          .fill(null)
          .map((_, index) => {
            return <VideoCard key={index} />;
          })}
      </div>
    </main>
  );
}
