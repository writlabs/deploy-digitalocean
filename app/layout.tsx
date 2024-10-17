import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on DigitalOcean',
  description: 'Deploy your Next.js application to DigitalOcean',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
