import { ObjectID } from ".";

export type GoalStatusType = "created" | "started" | "finished";
export type GoalDifficulitiesType = "easy" | "moderate" | "hard" | "veryhard";
export type GoalPrioType = "optional" | "required" | "urgent";

export interface IGoalOverview {
    title: string;
    status: GoalStatusType;
    difficulity: GoalDifficulitiesType;
    priority: GoalPrioType;
    created_at: number;
    progress: number;
    _id: ObjectID;
}

export type TaskStatusType = "waiting" | "inprogress" | "finishedontime" | "finisheddelayed";

export interface ITask {
    title: string;
    weight: number;
    status: TaskStatusType;
    time: number;
    _id: ObjectID;
}

export interface IGoalDetail extends IGoalOverview {
    tasks: ITask[];
}