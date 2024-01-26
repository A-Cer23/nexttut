import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './db/schema.ts',
    out: './db/migrations',
    driver: 'd1',
} satisfies Config;