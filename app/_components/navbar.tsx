import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className='p-6 flex w-full items-center justify-between'>
            <div className='text-2xl font-bold cursor-pointer hover:-translate-y-[1.5px] hover:underline underline-offset-4 duration-100 transition-transform'>
                <Link href='/'>aniket.</Link>
            </div>
            <div className='flex items-center'>
                <ThemeToggle />
                <Button variant='ghost' asChild>
                    <Link href={'/'}>Home</Link>
                </Button>
                <Button variant='ghost' asChild>
                    <Link href={'/blogs'}>Blogs</Link>
                </Button>
            </div>
        </div>
    );
};
