import { Navbar } from '../_components/navbar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-col min-h-[100dvh] items-center justify-center'>
            <Navbar />
            {children}
        </div>
    );
}
