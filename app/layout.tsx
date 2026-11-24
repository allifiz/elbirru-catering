import type { Metadata } from 'next';
import './globals.css';
import './editorial.css';
export const metadata: Metadata = {
  title: 'Elbirru Catering | Catering Garut',
  description: 'Konsep desain website katering dari SangkaraKarya. Informasi dan harga ilustratif.',
  robots: { index: false, follow: false },
  icons: { icon: '/images/logo-upload.png' },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
