import { z } from 'zod';

export const envSchema = z.object({
    NEO4J_URI: z.string(),
    NEO4J_USERNAME: z.string(),
    NEO4J_PASSWORD: z.string()
});
