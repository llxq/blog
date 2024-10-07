declare namespace NodeJS {
    interface ProcessEnv {
        // db
        DB_DATABASE: string
        // db user
        DB_USER: string
        // db password
        DB_PASSWORD: string
        // db host
        DB_HOST: string
        // db port
        DB_PORT: string
        // logging
        DB_LOGGING: string
        // poll max
        DB_POLL_MAX: string
        // poll min
        DB_POLL_MIN: string
        // poll acquire
        DB_POLL_ACQUIRE: string
        // poll idle
        DB_POLL_IDLE: string

        // redis
        // redis-host
        REDIS_HOST: string
        // redis-port
        REDIS_PORT: string
        // redis-password
        REDIS_PASSWORD: string

        // jwt secret
        JWT_SECRET: string

        // rsa private key
        RSA_PUBLIC_KEY: string
    }
  }
  