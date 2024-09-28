'use client'
import React from 'react'
import { Input, Checkbox, Button, Form, ConfigProvider } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import type { FormProps } from 'antd'


const LoginComponent = ({ close, }: {close: () => void}) => {
    const [form,] = Form.useForm<FormProps>()

    const login = () => {
        console.log(form.getFieldsValue())
    }

    return (
        <div className="bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto fixed h-modal inset-0 h-full z-50 justify-center items-center flex">
            <div className="relative w-full max-w-md px-4 h-auto">
                <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                    <div className="flex justify-end p-2">
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:text-blue-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                onClick={ () => close() }>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                        <ConfigProvider theme={ {
                            components: {
                                Form: {
                                    labelFontSize: 16,
                                },
                            },
                        }
                        }>
                            <Form form={ form } className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" layout="vertical" requiredMark={ false } onFinish={ login }>
                                <h3 className="text-xl font-medium text-gray-900 text-center dark:text-white">Welcome back</h3>
                                <FormItem label="账号" name="account" rules={ [{ required: true, message: '请输入账号', },] }>
                                    <Input className="h-[38px]" autoFocus={ true } placeholder="请输入账号/邮箱" />
                                </FormItem>
                                <FormItem label="密码"
                                          name="password" rules={ [{ required: true, message: '请输入密码', },] }>
                                    <Input type="password" placeholder="请输入密码" className="h-[38px]" />
                                </FormItem>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <Checkbox>记住我</Checkbox>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-500">忘记密码？</a>
                                </div>
                                <Button htmlType="submit" type="primary" size="large" className="w-full font-bold ">登录
                                </Button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    现在注册? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500 pl-1">创建账号</a>
                                </div>
                            </Form>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent