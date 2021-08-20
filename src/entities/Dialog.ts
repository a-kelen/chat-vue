import { Message } from "./Message";
import { User } from "./User";

export interface Dialog {
    id: string,
    user: User,
    messages: [Message]
}