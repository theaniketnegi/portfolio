'use client';

import Typewriter from 'typewriter-effect';
import { ProfileLinks } from '../_components/profile-links';

export default function Home() {
    return (
        <main className='flex-1 flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col text-center'>
                <h1 className='text-5xl font-bold'>Hi,</h1>

                <h1 className='text-6xl font-bold'>
                    I am{' '}
                    <div className='inline-block'>
                        <Typewriter
                            options={{
                                strings: [
                                    '<span>Aniket Negi.</span>',
                                    '<span style="color:#477eff">a developer.</span>',
                                    '<span style="color:#ff5151">a 3D artist.</span>',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 175,
                            }}
                        />
                    </div>
                </h1>
            </div>
            <ProfileLinks />
        </main>
    );
}
