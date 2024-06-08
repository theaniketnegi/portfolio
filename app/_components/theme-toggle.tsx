'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(`${theme === 'dark' ? 'light' : 'dark'}`)}
			variant={'ghost'}
        >
            <SunIcon className='hidden dark:block' />
            <MoonIcon className='block dark:hidden' />
        </Button>
    );
}
