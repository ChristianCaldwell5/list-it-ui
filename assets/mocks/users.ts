import { User } from "../../src/shared/models/user";

export const user1: User = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    lists: [
        {
            title: 'Groceries',
            description: "Buy groceries for the week",
            sharedCount: 0,
            items: [
                {
                    isChecked: false,
                    title: 'Milk',
                    quantity: 1,
                    description: '2% milk',
                    priority: 1,
                },
                {
                    isChecked: false,
                    title: 'Eggs',
                    quantity: 2,
                    description: '1 dozen',
                    priority: 1,
                }
            ],
            completedItems: []
        },
        {
            title: 'Errands',
            description: "Weekly tasks",
            sharedCount: 0,
            items: [
                {
                    isChecked: false,
                    title: 'Pick up dry cleaning',
                    description: 'Pick up dry cleaning',
                    priority: 1,
                }
            ],
            completedItems: []
        },
    ]
}