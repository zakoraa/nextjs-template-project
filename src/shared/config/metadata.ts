import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'iBantu Blockchain',
    template: '%s | iBantu',
  },
  description:
    'Enterprise blockchain infrastructure for the decentralized future.',
  keywords: [
    'blockchain',
    'web3',
    'crypto',
    'iBantu',
    'decentralized infrastructure',
  ],
  metadataBase: new URL('https://ibantu.com'),
  openGraph: {
    title: 'iBantu Blockchain',
    description: 'Enterprise blockchain infrastructure',
    url: 'https://ibantu.com',
    siteName: 'iBantu',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iBantu',
    description: 'Enterprise blockchain infrastructure',
  },
  robots: {
    index: true,
    follow: true,
  },
};
