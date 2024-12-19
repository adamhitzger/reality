import Filters from "@/components/Filters";
import Realities from "@/components/realities";
import getNemovitosti from "@/lib/actions";
import PaginationComp from "@/components/pagination";

export default async function Nemovitosti({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    let query;
    const PAGE_SIZE = 10;
    await searchParams
    const currentPage = parseInt(searchParams.page || '1');
    const size = currentPage > 1 ? PAGE_SIZE + 1 : PAGE_SIZE;
    const start = (currentPage - 1) * size;
    const end = start + PAGE_SIZE
    
    if (searchParams?.filter) {
        query = await getNemovitosti(searchParams.filter, start, end);
    } else {
        query = await getNemovitosti("naprodej", start, end)
    }

    const totalPages = Math.ceil(Number(query.count) / PAGE_SIZE);
    return (
        <main className="flex flex-col w-full space-y-20 py-20 px-8 md:px-0">
            <h1 className="text-center text-3xl ">Nemovitosti</h1>
            <section className="w-full ">
                <Filters />
            </section>
            {query.result.length > 0 && 
            <section className="space-y-3">
            <Realities realities={query.result}
             />
             <PaginationComp currentPage={currentPage} totalPages={totalPages} />
             </section>
             }
        </main>
    )
}


