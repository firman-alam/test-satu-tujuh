import './globals.css'
import { bebas_neue } from './ui/fonts'

export const metadata = {
  title: 'Valorant Heroes',
  description: 'Test PT. Satu Tujuh Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${bebas_neue.className}`}>{children}</body>
    </html>
  )
}
