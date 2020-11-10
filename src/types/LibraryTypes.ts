export interface IAuthor {
    name: string
}

export interface IBook {
    title: string
    ISBN: string
    author: IAuthor | null
}

export type ReactSelectOption = {
    value: string
    label: string
}