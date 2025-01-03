import type { Metadata } from 'next';
import '@/css/globals.css';
import '@/css/vars.css';
import '@/css/heroDiagram.css';
import '@/css/featureSection.css';
import { Header } from '@/components';

export const metadata: Metadata = {
  title: 'Vite | Next Generation Frontend Tooling',
  description: 'Next Generation Frontend Tooling',
  icons: 'https://vite.dev/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="generator" content={'Next.js 15.1.3'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'https://vite.dev/og-image.jpg'} />
        <meta property="og:url" content="https://vite.dev" />
        <meta property="og:description" content={'Next Generation Frontend Tooling'} />
        <meta property="og:site_name" content="vitejs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vite_js" />
        <meta name="theme-color" content="#646cff" />
      </head>
      <body>
        <div className="layout landing dark">
          <Header />
          {/* Main Content */}
          <div className="content">
            <div className="home">
              <div style={{ position: 'relative' }}>
                <div>
                  <div className="home">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
