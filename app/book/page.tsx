<<<<<<< HEAD
import { Scene } from '@/components/Scene';
=======
import { Expirience } from '@/components/Scene';
>>>>>>> origin/main
import { sanityFetch } from '@/sanity/lib/fetch';
import { BOOK_QUERY } from '@/sanity/lib/queries';
import { BookInter } from '@/sanity/lib/interfaces';

<<<<<<< HEAD
export default async function BookPage() {
=======
export default async function Book() {
>>>>>>> origin/main
    const data = await sanityFetch<BookInter[]>({
        query: BOOK_QUERY,
    })

    const pages: number = data.length - 1;
    console.log(data);
    return (
        <main className='min-h-screen w-full flex flex-col'>
<<<<<<< HEAD
                <Scene book={data} />
=======
            <section className="flex flex-col items-start space-y-2 px-8 my-8 mx-auto w-full ">
                <h1 className="text-5xl mx-auto font-semibold text-gray-800">Recenze</h1>
                <div className="flex flex-row space-x-2 mx-auto">
                    <span className="text-lg text-gray-600"></span>
                    <span className="text-lg text-gray-600"></span>
                </div>
                <div className="flex flex-col space-x-2 mx-auto">
                    <h2 className="text-xl font-semibold text-gray-600 text-center underline">Ovládání scény</h2>
                    <span>Stránku otočíte kliknutím na zlatou záložku vykukující z obrázku</span>
                    <ol className="text-base text-gray-600 space-y-2">
                        <li><strong>Otáčení</strong>
                            <ul className="px-5">
                                <li ><strong>PC</strong> - Levé tlačítko myši: Kliknutím a tažením levým tlačítkem myši můžete otáčet pohledem kolem objektu. Toto vám umožňuje prohlédnout si objekt z různých úhlů.</li>
                                <li ><strong>Mobil</strong> - Tažením jedním prstem otáčíte kameru.</li>
                            </ul>

                        </li>
                        <li><strong>Posun</strong>
                            <ul className="px-5">
                                <li ><strong>PC</strong> - Kliknutím a tažením pravým tlačítkem myši můžete posouvat pohled horizontálně a vertikálně. Toto je užitečné pro přesunutí pohledu na jinou část scény bez změny úhlu pohledu.</li>
                                <li ><strong>Mobil</strong> - Tažením dvěma prsty zároveň.</li>
                            </ul>
                        </li>
                        <li><strong>Zoomování</strong>
                            <ul className="px-5">
                                <li ><strong>PC</strong>  - Rolováním kolečka myši můžete přibližovat nebo oddalovat pohled na objekt.</li>
                                <li ><strong>Mobil</strong> - Tažením dvěma prsty od sebe či k sobě.</li>
                            </ul>
                        </li>
                    </ol>

                </div>
            </section>
            <section className='w-full flex min-h-screen border-2'>
                <Expirience book={data} />
            </section>
>>>>>>> origin/main
        </main>
    )
}
