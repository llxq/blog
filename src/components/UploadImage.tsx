import { useUserInfo } from '@/lib/hooks/useUserInfo'
import { getAuthHeader } from '@/lib/store/client/userInfo'
import { message, Upload, UploadProps } from 'antd'
import ImgCrop, { ImgCropProps } from 'antd-img-crop'

interface IUploadImageProps {
    hasImgCrop?: boolean
    cropProps?: Partial<ImgCropProps>
}

export const UploadImage = ({ hasImgCrop = false, children, cropProps = {}, }: IUploadImageProps & { children?: React.ReactNode }) => {
    const { token, } = useUserInfo()
    const props: UploadProps = {
        name: 'file',
        action: '/api/file',
        headers: getAuthHeader(token),
        showUploadList: false,
        accept: 'image/*',
        onChange(info) {
            if (info.file.status === 'done') {
                const file = info.fileList.pop()
                if (file) {
                    const { code, } = file.response ?? {}
                    if (code === 200) {
                        return message.success(`${ info.file.name } 上传成功~`)
                    }
                }
                message.error(`${ info.file.name } 上传失败!`)
            }
        },
    }

    const UploadChildren = (
        <Upload className="reset-ui" { ...props }>
            { children }
        </Upload>
    )

    if (!hasImgCrop) {
        return UploadChildren
    }

    return (
        <ImgCrop { ...cropProps }>
            { UploadChildren }
        </ImgCrop>
    )
}