import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ProfileLinks = () => {
    return (
        <>
            <div className='mt-8 flex gap-8'>
                <Link href='https://github.com/theaniketnegi' target='_blank'>
                    <GitHubLogoIcon className='h-8 w-8 cursor-pointer hover:-translate-y-[2px] duration-100 transition-transform' />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/aniket-negi-a7203b16b/'
                    target='_blank'
                >
                    <LinkedInLogoIcon className='h-8 w-8 cursor-pointer hover:-translate-y-[2px] duration-100 transition-transform' />
                </Link>
                <Link href='https://www.twitter.com/sillyket' target='_blank'>
                    <TwitterLogoIcon className='h-8 w-8 cursor-pointer hover:-translate-y-[2px] duration-100 transition-transform' />
                </Link>
                <Link href='mailto:aniketng08@gmail.com' target='_blank'>
                    <EnvelopeClosedIcon className='h-8 w-8 cursor-pointer hover:-translate-y-[2px] duration-100 transition-transform' />
                </Link>
            </div>
            <Button className='mt-8' asChild>
                <Link
                    href='https://drive.google.com/file/d/1A8M9_ugxHf1tLS_KKXcLnT9pFRzEhaEp/view?usp=sharing'
                    target='_blank'
                >
                    Download resume
                </Link>
            </Button>
        </>
    );
};