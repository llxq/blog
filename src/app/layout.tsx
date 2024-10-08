import LayoutProviderWrapper from '@/components/LayoutProviderWrapper'
import React from 'react'
import '@/styles/globals.scss'

export default function RootLayout ({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={ true }>
                <LayoutProviderWrapper>{ children }</LayoutProviderWrapper>
            </body>
        </html>
    )
}
