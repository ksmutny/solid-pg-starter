import pino from 'pino'

export const logger = pino({
    level: process.env.BE_LOG_LEVEL!,
})
