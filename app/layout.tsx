import './globals.css';

import { Outfit } from 'next/font/google';

import TextHeading from './components/Typography/TextHeading';
import CardCodeSelect from './components/CardCodeSelect';
import Link from 'next/link';

export const metadata = {
  title: 'Marvel Card Viewer',
  description: 'Created by Kevin Lee',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <header>
          <div className="mt-6 lg:mt-12">
            <TextHeading centered>Marvel Card Viewer</TextHeading>
            <div className="flex justify-center mt-4">
              <CardCodeSelect />
            </div>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between pt-6 lg:pt-12 px-6">
          {children}
        </main>
        <footer>
          <div className="mt-6 lg:mt-12 py-2 bg-primary text-white text-center">
            <Link href="https://github.com/ssunjinny">
              created by ssunjinny
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
