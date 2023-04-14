export interface Lists {
    title: string,
    itemCount: number,
    sharedCount: number
}

export interface ListCardProps {
    key: string,
    lists: Lists
}
