import Filters from "@/components/Filters";
import Realities from "@/components/realities";
import getNemovitosti from "@/lib/actions";


export default async function Nemovitosti({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    let query;
    if (searchParams?.filter) {
        query = await getNemovitosti(searchParams.filter);
    } else {
        query = await getNemovitosti("naprodej")
    }

    return (
        <main className="flex flex-col w-full space-y-20 py-20 px-8 md:px-0">
            <h1 className="text-center text-3xl ">Nemovitosti</h1>
            <section className="w-full ">
                <Filters />
            </section>
            {query.result.length > 0 && <Realities realities={query.result} />}
        </main>
    )
}


