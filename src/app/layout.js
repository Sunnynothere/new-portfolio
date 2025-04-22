import "./globals.scss"
import { Poppins, Caveat } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--primary-font',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--secondary-font',
})


export const metadata = {
  title: 'Portfolio Sol Lizarraga Grigoni | Web Developer',
  description: 'Personal portfolio showcasing web development projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable}`}>
      <body>
        <div className="portfolio-container">
          {children}
        </div>
      </body>
    </html>
  );
}
