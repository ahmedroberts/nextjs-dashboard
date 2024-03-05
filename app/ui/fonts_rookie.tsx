import { Inter, Lusitana, Emilys_Candy } from 'next/font/google';
// https://fonts.google.com/

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export const lusitana = Lusitana({
    weight: '400',
    style: 'normal',
    display: 'swap',
    variable: '--font-lusitana',
    subsets: ['latin']
});

export const emilysCandy = Emilys_Candy({
    weight: '400',
    style: 'normal',
    display: 'swap',
    variable: '--font-emilysCandy',
    subsets: ['latin']

});
