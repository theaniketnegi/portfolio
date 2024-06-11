import Markdown from 'react-markdown';
import { getBlogMetadata } from '@/utils/getBlogMetadata';
import fs from 'fs';
import matter from 'gray-matter';

type Props = {
    params: { slug: string };
};

function getBlog(slug: string) {
    const dir = 'public/blogs/';
    const fileContent = fs.readFileSync(dir + `${slug}.md`, 'utf-8');

    const matterResult = matter(fileContent);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getBlogMetadata('public/blogs');
    return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }: Props) {
    const id = params?.slug ? ' | ' + params?.slug : '';

    return {
        title: 'Aniket Negi' + id.replaceAll('-', ' '),
    };
}

export default function Blog({ params }: { params: { slug: string } }) {
    const post = getBlog(params.slug);

    return (
        <main className='flex-1 flex flex-col max-w-[70%] w-full'>
            <article className='mt-12'>
                <Markdown className={'prose dark:prose-invert'}>
                    {post.content}
                </Markdown>
            </article>
        </main>
    );
}
