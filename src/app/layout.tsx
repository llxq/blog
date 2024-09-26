import './globals.scss'

export default function RootLayout ({ children, }: Readonly<{ children: React.ReactNode }>) {
    const {} = { a: 1, }
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
