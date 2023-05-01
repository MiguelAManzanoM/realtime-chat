
import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: "1592710"!,
  key: "384a8230f2760f4ad959"!,
  secret: "4bbf1c3b945691bb256d"!,
  cluster: 'us2',
  useTLS: true,
})

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: 'us2',
  }
)
