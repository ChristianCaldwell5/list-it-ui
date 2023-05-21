import { user1 } from "../../assets/mocks/users";
import { List } from "../shared/models/list";
import { User } from "../shared/models/user";

export default class UserService {

    static user: User = this.getMockUser();

    static getUser() {
        return this.user;
    }

    static setUser(user: User) {
        this.user = user;
    }

    static updateUserList(list: List, index: number) {
        this.user.lists[index] = list;
    }

    // return mock user
    static getMockUser(): User {
        return user1
    }
}