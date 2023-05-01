import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: 'https://usw1-novel-katydid-33734.upstash.io',
  token: 'AYPGASQgYTRkYjY5MzUtNGQxMy00NzM4LTg1NjAtMmM5OWJiYTg1ZTQ0MTU3MWUwOTVmZDEyNDMwYTk2MTYwODZlYmI0OTMwOTI=',
})
