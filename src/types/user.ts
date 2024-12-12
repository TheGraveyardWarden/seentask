import { ObjectID } from ".";

export interface User {
    username: string;
    goals: ObjectID[];
}