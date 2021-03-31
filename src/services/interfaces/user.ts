export interface UserInterface{
    id: String,
    name: String,
    surname: String, 
    description?: String,
    personalId?: String,
    birthDate?: Date,
    type?: "Coach" | "Client",
    weight?: Number,
    height?: Number,
    profilePicture: String,
    password?: any
}