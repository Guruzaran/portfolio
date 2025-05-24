import './globals.css'
import { Inter } from 'next/font/google'
// If you intend to use next-themes, update the import as follows:
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GurusaranVR | Portfolio',
  description: 'Modern portfolio website of Gurusaran V R',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  )
}
