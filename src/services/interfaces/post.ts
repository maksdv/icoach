import { UserInterface } from "./user";

export interface PostInterface {
    id: String,
    message: String,
    date: Number,
    image: String,
    likes: Array<String>,
    comments: Array<CommentInterface>
}

interface CommentInterface {
    id: String
    message: String,
    date: Number,
    from: UserInterface,
    likes: Array<UserInterface>
}