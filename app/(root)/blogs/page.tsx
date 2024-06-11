import { getBlogMetadata } from '@/utils/getBlogMetadata';
import Link from 'next/link';
import { format } from 'date-fns';

export default function Blogs() {
    const postMetadata = getBlogMetadata('public/blogs');
    postMetadata.sort(
        (a, b) => b.date.getTime() - a.date.getTime(),
    );

    return (
        <main className='flex-1 flex flex-col max-w-[70%] w-full'>
            <h1 className='text-5xl font-bold mt-8'>My blogs</h1>
            <div className='border-b-2 border-[--primary] mt-4'></div>
            <div className='mt-8 space-y-8'>
                {postMetadata.map((post, index) => {
                    return (
                        <div
                            key={index}
                            className='hover:-translate-y-1 transition-transform duration-100'
                        >
                            <Link href={`/blogs/${post.slug}`}>
                                <h3 className='text-3xl font-semibold hover'>
                                    {post.title}
                                </h3>
                                <p className='text-xs font-light mt-1'>
                                    {format(post.date, 'dd/MM/yyyy')}
                                </p>
                                <p className='mt-2'> {post.description} </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
