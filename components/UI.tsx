import { BookInter } from "@/sanity/lib/interfaces";
import { atom, useAtom } from "jotai";


export const pageAtom = atom(0);
export let pages = [
  {
    front: "",
    back: "",
  },
];


export const UI = ({data}: {data: BookInter[]}) => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {data.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === data.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(data.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>
    </>
  );
};