const { spawn } = require('child_process')
const path = require('path')
// 判断是否为mac
const isMac = process.platform === 'darwin'

/* 加载系统环境变量给minio使用 */
const loadEnvVariables = () => {
    if (!isMac) {
        return Promise.resolve({})
    }
    // 加载 ~/.bash_profile 中的环境变量
    const bashProfilePath = path.join(process.env.HOME, '.bash_profile')
    const loadEnvCommand = `source ${bashProfilePath} && env`

    return new Promise((resolve, reject) => {
        const envProcess = spawn('bash', ['-c', loadEnvCommand], { stdio: 'pipe' })

        let envOutput = ''

        envProcess.stdout.on('data', (data) => {
            envOutput += data.toString()
        })

        envProcess.on('close', () => {
            const envVars = envOutput.split('\n').reduce((acc, line) => {
                const [key, value] = line.split('=')
                if (key && value) acc[key] = value
                return acc
            }, {})
            resolve(envVars)
        })

        envProcess.stderr.on('data', (data) => {
            reject(new Error(`Error loading env variables: ${data}`))
        })
    })
}

/* 启动minio服务 */
const startMinio = env => {
    return new Promise((resolve, reject) => {
        spawn('minio-start', {
            shell: true,
            stdio: 'inherit',
            env: { ...process.env, ...env } // 合并当前环境变量和加载的环境变量
        })
        resolve()
    })
}

loadEnvVariables().then(startMinio).finally(() => {
    spawn('next', ['dev'], {
        shell: true,
        stdio: 'inherit',
    })
})
.catch(error => {
    console.error('Error:', error)
})
