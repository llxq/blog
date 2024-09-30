'use client'
import Navbar from '@/components/Navbar'
import { clientStore } from '@/store/client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import React from 'react'
import { Provider } from 'react-redux'

export default function LayoutProviderWrapper ({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Provider store={ clientStore }>
            <AntdRegistry>
                <div className="w-full px-4 bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    <Navbar />
                </div>
                <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    { children }
                </div>
            </AntdRegistry>
        </Provider>
    )
}