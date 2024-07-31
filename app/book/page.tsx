import { Expirience } from '@/components/Scene';
import { sanityFetch } from '@/sanity/lib/fetch';
import { BOOK_QUERY } from '@/sanity/lib/queries';
import { BookInter } from '@/sanity/lib/interfaces';

export default async function Book() {
    const data = await sanityFetch<BookInter[]>({
        query: BOOK_QUERY,
    })

    const pages: number = data.length - 1;
    console.log(data);
    return (
        <main className='min-h-screen w-full flex flex-col'>
            <section className="flex flex-col items-start space-y-2 my-8 mx-auto w-full ">
                <h1 className="text-5xl mx-auto font-semibold text-gray-800">Recenze</h1>
                <div className="flex flex-row space-x-2 mx-auto">
                    <span className="text-lg text-gray-600"></span>
                    <span className="text-lg text-gray-600"></span>
                </div>
                <div className="flex flex-col space-x-2 mx-auto">
                    <h2 className="text-xl font-semibold text-gray-600 text-center underline">Ovládání scény</h2>
                    <ol className="text-base text-gray-600 space-y-2">
                        <li><strong>Otáčení</strong> - Levé tlačítko myši: Kliknutím a tažením levým tlačítkem myši můžete otáčet pohledem kolem objektu. Toto vám umožňuje prohlédnout si objekt z různých úhlů.
                        </li>
                        <li><strong>Posun</strong> - Kliknutím a tažením pravým tlačítkem myši můžete posouvat pohled horizontálně a vertikálně. Toto je užitečné pro přesunutí pohledu na jinou část scény bez změny úhlu pohledu.</li>
                        <li><strong>Zoomování</strong> - Rolováním kolečka myši můžete přibližovat nebo oddalovat pohled na objekt.</li>
                    </ol>

                </div>
            </section>
            <section className='w-full flex min-h-screen border-2'>
                <Expirience book={data} />
            </section>
        </main>
    )
}
