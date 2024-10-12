import { getIpAddress } from '@/lib/store/service/getIpAddress'
import { isDev } from '@/lib/utils/client'
import { Logger } from '@/lib/utils/server'
import { Client } from 'minio'

const { MINIO_HOST, MINIO_PORT, MINIO_ACCESS_KEY, MINIO_SECRET_KEY, MINIO_BUCKET, } = process.env

const MINIO_CLIENT = new Client({
    endPoint: isDev ? getIpAddress() : MINIO_HOST,
    port: +MINIO_PORT,
    useSSL: false,
    accessKey: MINIO_ACCESS_KEY,
    secretKey: MINIO_SECRET_KEY,
})

const initBucket = async (bucketName?: string) => {
    if (!bucketName) {
        throw new Error('请设置MINIO_BUCKET')
    }
    try {
        const exists = await MINIO_CLIENT.bucketExists(bucketName)
        if (!exists) {
            await MINIO_CLIENT.makeBucket(bucketName)
        }
    } catch (error) {
        throw error
    }
}

initBucket(MINIO_BUCKET)

export interface IMinioFile {
    name: string
    lastModified: number
    etag: string
    size: number
}

export interface IUploadFile {
    name: string
    stream: any
    size: number
    mimetype: string
}

export class MinioClient {
    public static async uploadFile ({ name, stream, size, mimetype, }: IUploadFile): Promise<{
        etag: string;
        versionId: string | null
    }> {
        Logger.log(`上传文件：${ name }`)
        return MINIO_CLIENT.putObject(MINIO_BUCKET!, name, stream, size, {
            'Content-Type': mimetype,
        })
    }

    public static async downloadFile () {}

    public static async deleteFile (objectName: string) {
        Logger.log(`删除文件：${ objectName }`)
        return MINIO_CLIENT.removeObject(MINIO_BUCKET!, objectName)
    }

    /**
     * 查询🪣
     * @param fileName 需要查询的名称
     * @returns 返回查询的🪣
     */
    public static async findFile (fileName?: string): Promise<Array<IMinioFile>> {
        return new Promise((resolve, reject) => {
            const stream = MINIO_CLIENT.listObjects(MINIO_BUCKET!, fileName, true),
                files: Array<IMinioFile> = []
            stream.on('error', reject)
            stream.on('data', (data: IMinioFile) => {
                files.push(data)
            })
            stream.on('end', () => resolve(files))
        })
    }

    /**
     * 获取预览地址
     * @param objectName
     * @param timer 默认一天
     */
    public static async getPreviewUrl (objectName: string, timer = 24 * 60 * 60) {
        return MINIO_CLIENT.presignedGetObject(MINIO_BUCKET!, objectName, timer, {
            'response-content-disposition': `inline; filename="${ objectName }"`,
        })
    }
}
