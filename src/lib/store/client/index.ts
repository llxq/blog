import { LoginStatusReducer } from '@/lib/store/client/loginStatus'
import { UserInfoReducer } from '@/lib/store/client/userInfo'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
// defaults to localStorage for web
import storage from 'redux-persist/lib/storage'

// 创建 root reducer
const rootReducer = combineReducers({
    userInfo: UserInfoReducer,
    loginStatus: LoginStatusReducer,
})

// 配置 redux-persist
const persistConfig = {
    key: 'blog_store',
    storage,
    whitelist: ['userInfo',],
}

// 持久化 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 配置 store，使用持久化 reducer
export const clientStore = configureStore({
    reducer: persistedReducer,
    // 将 persist/PERSIST、persist/REHYDRATE 加入到警告的忽略白名单中
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                // 忽略 redux-persist 相关 action 的检查
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE',],
            },
        })
    },
})

// 创建持久化 store
export const persistor = persistStore(clientStore)

export type IClientState = ReturnType<typeof clientStore.getState>

export type IClientDispatch = typeof clientStore.dispatch
