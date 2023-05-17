import './globals.css';

import TextHeading from './components/Typography/TextHeading';

export const metadata = {
  title: 'Marvel Card Viewer',
  description: 'Created by Kevin Lee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mt-6 lg:mt-12">
          <TextHeading centered>Marvel Card Viewer</TextHeading>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between pt-6 lg:pt-12 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
