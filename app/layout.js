import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://askdroid.com'),
  title: {
    default: 'AI and Robotics Solutions | Askdroid – Insights, News & Tools',
    template: '%s | Askdroid',
  },
  description:
    'Discover cutting-edge AI and Robotics Solutions at Askdroid. Explore machine learning, deep neural networks, autonomous systems, and robotics technology.',
  openGraph: {
    title: 'AI and Robotics Solutions | Askdroid – Insights, News & Tools',
    description:
      'Discover cutting-edge AI and Robotics Solutions at Askdroid. Explore machine learning, deep neural networks, autonomous systems, and robotics technology.',
    url: 'https://askdroid.com/',
    siteName: 'Askdroid',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI and Robotics Solutions | Askdroid – Insights, News & Tools',
    description:
      'Discover cutting-edge AI and Robotics Solutions at Askdroid. Explore machine learning, deep neural networks, autonomous systems, and robotics technology.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
