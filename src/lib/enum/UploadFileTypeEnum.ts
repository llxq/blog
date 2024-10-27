/**
 * 上传的文件类型（因为多个图片上传用的同一个接口，所以通过type区分）
 */
export enum UploadFileTypeEnum {
    POST = 'POST',
    COMMENT = 'COMMENT',
    STORY = 'STORY',
    LIKE = 'LIKE',
}