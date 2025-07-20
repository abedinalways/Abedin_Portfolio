import { Sora, SUSE, Outfit, Mulish, Poppins, Raleway, Ovo } from 'next/font/google';
import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

const suse = SUSE({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Sheikh Minhajul Abedin',
  description: 'portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth dark'>
      <body
        className={`${sora.className} ${ovo.className} ${suse.className} ${poppins.className} ${mulish.className} ${raleway.className} ${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark-text-white`}
      >
        {children}
      </body>
    </html>
  );
}
