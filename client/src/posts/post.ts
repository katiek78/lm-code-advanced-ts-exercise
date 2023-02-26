export type Post = {
    id: string
    title: string
    text: string
    author: {
        id: string
        name: string
        creationDate: string
    }
};