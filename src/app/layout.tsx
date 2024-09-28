import React from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Navbar from '@/components/Navbar'
import './globals.scss'

export default function RootLayout ({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={ true }>
                <AntdRegistry>
                    <div className="w-full px-4 bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        <Navbar />
                    </div>
                    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        { children }
                    </div>
                </AntdRegistry>
            </body>
        </html>
    )
}
