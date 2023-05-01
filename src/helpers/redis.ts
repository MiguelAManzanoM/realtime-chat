
const upstashRedisRestUrl = 'https://usw1-novel-katydid-33734.upstash.io'
const authToken = 'AYPGASQgYTRkYjY5MzUtNGQxMy00NzM4LTg1NjAtMmM5OWJiYTg1ZTQ0MTU3MWUwOTVmZDEyNDMwYTk2MTYwODZlYmI0OTMwOTI='

type Command = 'zrange' | 'sismember' | 'get' | 'smembers'

export async function fetchRedis(
  command: Command,
  ...args: (string | number)[]
) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join('/')}`

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`)
  }

  const data = await response.json()
  return data.result
}
