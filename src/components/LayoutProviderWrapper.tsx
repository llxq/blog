'use client'
import LoginComponent from '@/components/LoginComponent'
import Navbar from '@/components/Navbar'
import { clientStore } from '@/lib/store/client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import React from 'react'
import { Provider } from 'react-redux'

export default function LayoutProviderWrapper ({ children, }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Provider store={ clientStore }>
            <AntdRegistry>
                <div className="w-full h-full flex flex-col">
                    <div className="w-full px-4 bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        <Navbar />
                    </div>
                    <div className="flex-1 overflow-auto w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100">
                        { children }
                    </div>
                    <LoginComponent />
                </div>
            </AntdRegistry>
        </Provider>
    )
}
