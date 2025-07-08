import { z } from "zod"
import { en } from "zod/v4/locales"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env)
