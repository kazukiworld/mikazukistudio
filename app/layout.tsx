import './globals.css'

export const metadata = {
  title: 'Mikazuki Studio',
  description: 'A Japanese creative web design and development agency based in the U.S, crafting bilingual digital experiences with storytelling and interactivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png" />
        <title>Japanese Web Design and Development Agency based in the U.S</title>
        <meta name="keywords"
          content="Japanese web design agency, Japanese web development agency" />
        <meta name="description"
          content="We are Mikazuki Studio, a Japanese creative web design and development studio
          based in the U.S, crafting bilingual digital experiences with
          storytelling and interactivity." />
      </head>
      <body>{children}</body>
    </html>
  )
}
