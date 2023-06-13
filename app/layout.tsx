import './globals.css'
import "@code-hike/mdx/dist/index.css";

export const metadata = {
  title: 'JavaScript 101',
  description: 'A simple guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="prose">{children}</body>
    </html>
  )
}
