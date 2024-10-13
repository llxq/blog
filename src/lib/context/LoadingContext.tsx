import { Spin } from 'antd'
import { createContext, useContext, useState } from 'react'

const LoadingContext = createContext({
    showLoading: () => {},
    hideLoading: () => {},
})

export const LoadingProvider = ({ children, }: { children: React.ReactNode }) => {
    const [status, setStatus,] = useState({ loading: false, })

    const showLoading = () => setStatus({ loading: true, })

    const hideLoading = () => setStatus({ loading: false, })

    return (
        <LoadingContext.Provider value={ { showLoading, hideLoading, } }>
            <Spin spinning={ status.loading } fullscreen />
            { children }
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const { showLoading, hideLoading, } = useContext(LoadingContext)

    const loadingAction = async <T extends (...args: any) => any> (callBack: T) => {
        showLoading()
        try {
            await callBack()
        } finally {
            hideLoading()
        }
    }

    return {
        showLoading,
        hideLoading,
        loadingAction,
    }
}