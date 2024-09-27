import './globals.scss'

export default function RootLayout ({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <meta name="keywords" content="nextjs" />
            <body suppressHydrationWarning={true}>{ children }</body>
        </html>
    )
}
