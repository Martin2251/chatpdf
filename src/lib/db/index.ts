import {neon, neonConfig} from"@neondatabase/serverless"
import { WEB_VITALS } from "next/dist/shared/lib/utils"

neonConfig.fetchConnectionCache = true
if(!process.env.DATABASE_URL){
    throw new Error ("database url not found")
}

const sql = neon(process.env.DATABASE_URL)

export const db