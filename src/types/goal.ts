import { ObjectID, Timestamp } from ".";

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

export type GoalTaskStatusType = "waiting" | "inprogress" | "finishedontime" | "finisheddelayed";

export interface IGoalTaskTime {
    days: number;
    hours: number;
    minutes: number;
}

export interface IGoalTask {
    title: string;
    weight: number;
    status: GoalTaskStatusType;
    time: IGoalTaskTime;
    _id: ObjectID;
    finished_at: Timestamp;
}

export interface IGoalDetail extends IGoalOverview {
    tasks: IGoalTask[];
}