export interface List {
    title: string,
    itemCount: number,
    sharedCount: number
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
