import { Profile } from "./profile.interface";

export interface PostCreateDto {
    title: string,
    content: string,
    authorId: number,
}

export interface Post {
    id: number,
    title: string,
    author: Profile,
    images: string[],
    createdAt: string,
    updatedAt: string,
    comments: Comment[]
}

export interface Comment {
    id: number,
    text: string,
    author: {
        id: number,
        username: string,
        avatarUrl: string,
        subscribersAmount: number,
    },
    postId: number,
    commentId: number,
    createdId: string,
    updatedId: string,
}