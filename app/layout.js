import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollReveal';

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'] });

export const metadata = {
  title: 'RO Service Pune | Aquaguard, Kent, Pureit Water Purifier Repair | AquaguardService',
  description: 'Expert RO water purifier service, repair & installation in Pune & Pimpri-Chinchwad. Aquaguard, Kent RO, Pureit, AO Smith, Livpure & all brands. Call 07030370076.',
  metadataBase: new URL('https://www.aquaguardservice.in'),
  openGraph: {
    title: 'RO Service Pune | AquaguardService',
    description: 'Expert RO water purifier service & repair in Pune. All brands. Call 07030370076.',
    url: 'https://www.aquaguardservice.in',
    siteName: 'AquaguardService',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning>
        <Navbar />
        <ScrollRevealInit />
        {children}
        <Footer />
        <a
          href="https://wa.me/917030370076"
          className="whatsapp-float"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp Chat"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.556 4.122 1.528 5.856L.057 23.944l6.281-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.359-.213-3.728.977.994-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.422 0 9.818 4.396 9.818 9.818S17.422 21.818 12 21.818z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
