import './globals.css'

export const metadata = {
  title: 'Japanese Web Design and Development Agency based in the U.S',
  description: 'We are Mikazuki Studio, a Japanese creative web design and development studio based in the U.S, crafting bilingual digital experiences with storytelling and interactivity.',
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
        <link rel="shortcut icon" href="/mikazukistudio-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mikazukistudio-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/mikazukistudio-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mikazukistudio-logo.png" />
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
