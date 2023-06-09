import './globals.css';

import TextHeading from './components/Typography/TextHeading';
import CardCodeSelect from './components/CardCodeSelect';

export const metadata = {
  title: 'Marvel Card Viewer',
  description: 'Created by Kevin Lee',
};

interface IRootLayoutProps {
  children: React.ReactNode;
  params: {
    code: string;
  };
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="mt-6 lg:mt-12">
            <TextHeading centered>Marvel Card Viewer</TextHeading>
            <CardCodeSelect code={params.code} />
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between pt-6 lg:pt-12 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
