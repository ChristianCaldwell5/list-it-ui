import { List } from "./list";

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    lists: List[]
}