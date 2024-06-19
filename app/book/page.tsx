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
        <div className='h-screen mydiv'>
            <Expirience book={data} />
        </div>
    )
}
