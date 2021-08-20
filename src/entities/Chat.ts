import { Message } from './Message'
import { User } from './User'

export interface Chat {
    id: string,
    name: string,
    author: User,
    avatar: string,
    members: [User],
    messages: [Message]
}