'use client'
import LoginComponent from '@/components/LoginComponent'
import Navbar from '@/components/Navbar'
import { LoadingProvider } from '@/lib/context/LoadingContext'
import { clientStore, persistor } from '@/lib/store/client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function LayoutProviderWrapper ({ children, }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Provider store={ clientStore }>
            <AntdRegistry>
                <ConfigProvider locale={ zhCN }>
                    <LoadingProvider>
                        <PersistGate persistor={ persistor }>
                            <div className="w-full h-full flex flex-col">
                                <div className="w-full px-4 bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                                    <Navbar />
                                </div>
                                <div
                          className="flex-1 overflow-auto w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100">
                                    { children }
                                </div>
                                <LoginComponent />
                            </div>
                        </PersistGate>
                    </LoadingProvider>
                </ConfigProvider>
            </AntdRegistry>
        </Provider>
    )
}
