export interface List {
    title: string,
    description?: string,
    sharedCount: number,
    items: ListItem[]
}

export interface ListItem {
    checked: boolean,
    title: string,
    quantity?: number,
    description?: string,
    priority?: number
}

// props
export interface ListHintCardProps {
    key: number,
    list: List
}

// states
export interface ListScreenState {
    lists: List[];
    displayModal: boolean
}
