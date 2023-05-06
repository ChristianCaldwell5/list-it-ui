export interface List {
    title: string,
    description?: string,
    itemCount: number,
    sharedCount: number,
    items: ListItem[]
}

export interface ListItem {
    checked: boolean,
    title: string,
    description?: string,
    priority?: number
}

// props
export interface ListHintCardProps {
    key: string,
    list: List
}

// states
export interface ListScreenState {
    lists: List[];
    displayModal: boolean
}
