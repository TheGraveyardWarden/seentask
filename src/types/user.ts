import { ObjectID } from ".";

export type UserTitle = "newbie" | "beginner" | "intermediate" | "pro" | "godlike";

export interface UserLevel {
    xp: number;
    level: number;
    title: UserTitle;
}

export interface User {
    username: string;
    goals: ObjectID[];
    level: UserLevel;
    points: number;
}