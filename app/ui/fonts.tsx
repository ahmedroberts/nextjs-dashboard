import { Inter, Lusitana, Emilys_Candy } from 'next/font/google';
// https://fonts.google.com/

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

const lusitana = Lusitana({
    weight: ['400', '700'],
    style: 'normal',
    display: 'swap',
    variable: '--font-lusitana',
    subsets: ['latin']
});

const emilysCandy = Emilys_Candy({
    weight: '400',
    style: 'normal',
    display: 'swap',
    variable: '--font-emilysCandy',
    subsets: ['latin']
});

export { inter, lusitana, emilysCandy };