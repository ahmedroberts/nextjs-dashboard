import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>9th Raikage Ahmed</title>
      </head>
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
