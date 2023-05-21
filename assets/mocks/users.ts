import { User } from "../../src/shared/models/user";

export const user1: User = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    lists: [
        {
            title: 'Groceries',
            description: "Buy groceries for the week",
            itemCount: 2,
            sharedCount: 0,
            items: [
                {
                    checked: false,
                    title: 'Milk',
                    quantity: 1,
                    description: '2% milk',
                    priority: 1,
                },
                {
                    checked: false,
                    title: 'Eggs',
                    quantity: 2,
                    description: '1 dozen',
                    priority: 1,
                }
            ]
        },
        {
            title: 'Errands',
            description: "Weekly tasks",
            itemCount: 1,
            sharedCount: 0,
            items: [
                {
                    checked: false,
                    title: 'Pick up dry cleaning',
                    description: 'Pick up dry cleaning',
                    priority: 1,
                }
            ]
        },
    ]
}