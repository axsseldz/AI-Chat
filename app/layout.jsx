import styles from '../styles/globals.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '400'
})

export default function RootLayout({ children }) {

  return (
    <html className={roboto.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
