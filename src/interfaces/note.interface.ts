export interface INote {
    id?: string,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string[],
    noteStatus?: string,
}
