import {Space_Grotesk} from 'next/font/google'

const mainFontFamily = Space_Grotesk({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-28 mt-8 bg-black ${mainFontFamily.className}`}>{children}</body>
    </html>
  )
}
