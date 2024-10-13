'use client'
import { useUserInfo } from '@/lib/hooks/useUserInfo'
import { rsaEncrypt } from '@/lib/utils/client'
import { http } from '@/lib/utils/http'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, message, Tooltip, type FormProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface IFormProps extends FormProps {
    username: string
    email: string
    password: string
    againPassword: string
}

const { Password, } = Input

const RegisterPage = () => {
    const [ form, ] = Form.useForm<IFormProps>()
    const router = useRouter()
    const [ loading, setLoading, ] = useState(false)
    const { setUserInfo, } = useUserInfo()

    const register = async () => {
        setLoading(true)
        try {
            const { againPassword, ...formModel } = form.getFieldsValue()
            // 加密
            const password = await rsaEncrypt(againPassword)
            const { data, } = await http.post('/api/auth/register', { ...formModel, password, })
            setUserInfo(data)
            message.success('注册成功，正在跳转首页')
            router.push('/', { scroll: false, })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 w-[500px]">
                <ConfigProvider theme={ {
                    components: {
                        Form: {
                            labelFontSize: 16,
                        },
                    },
                }
                }>
                    <Form form={ form } className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" layout="vertical" onFinish={ register }>
                        <h3 className="text-xl font-medium text-gray-900 text-center dark:text-white">欢迎注册</h3>
                        <FormItem label="用户名" name="username" rules={ [{ required: true, message: '请输入用户名', },] }>
                            <Input maxLength={ 15 } className="h-[38px]" autoFocus={ true } placeholder="请输入账号/邮箱" />
                        </FormItem>
                        <FormItem hasFeedback label="邮箱" name="email" rules={ [
                            { required: true, message: '请输入邮箱', },
                            { type: 'email', message: '请输入正确的邮箱', },
                        ] }>
                            <Input className="h-[38px]" placeholder="请输入账号/邮箱" />
                        </FormItem>
                        <FormItem hasFeedback label={
                            <div className='flex gap-2 justify-end align-bottom'>
                                <span>密码</span>
                                <Tooltip placement="top" title='密码长度不能少于8位，并且包含大小写字母、数字、特殊字符！'>
                                    <QuestionCircleOutlined className='cursor-pointer mt-0.5' />
                                </Tooltip>
                            </div>
                        } name="password" rules={ [
                            { required: true, message: '请输入密码', },
                            // TODO: 密码长度，密码强度 大小写，数字，特殊字符
                            ({ getFieldValue, }) => {
                                return {
                                    validator (_, value) {
                                        if (!value || getFieldValue('password').length >= 8) {
                                            // 判断是否有大小写，数字，特殊字符
                                            if (/[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject('密码必须包含大小写字母、数字、特殊字符！')
                                        } else {
                                            return Promise.reject('密码长度不足')
                                        }
                                    },
                                }
                            },
                        ] }>
                            <Password placeholder="请输入密码" className="h-[38px]" />
                        </FormItem>
                        <FormItem hasFeedback label="确认密码" name="againPassword" rules={ [
                            { required: true, message: '请确认密码', },
                            ({ getFieldValue, }) => {
                                return {
                                    validator (_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve()
                                        } else {
                                            return Promise.reject('两次密码不一致')
                                        }
                                    },
                                }
                            },
                        ] }>
                            <Password placeholder="请再次输入密码" className="h-[38px]" />
                        </FormItem>
                        <Button loading={ loading } htmlType="submit" type="primary" size="large" className="w-full font-bold ">注册
                        </Button>
                    </Form>
                </ConfigProvider>
            </div>
        </div>
    )
}

export default RegisterPage
