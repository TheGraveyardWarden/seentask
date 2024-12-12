import { GoalDifficulitiesType, GoalPrioType, GoalTaskStatusType } from "../types/goal";

export const parse_goal_prio = (prio: GoalPrioType): string => {
    switch(prio) {
        case "optional": return "اختیاری";
        case "required": return "مورد نیاز";
        case "urgent": return "فوری";
        default: return "unknown!";
    }
}

export const parse_goal_difficulity = (diff: GoalDifficulitiesType): string => {
    switch(diff) {
        case "easy": return "آسان";
        case "moderate": return "متوسط";
        case "hard": return "سخت";
        case "veryhard": return "خیلی سخت";
        default: return "unknown!";
    }
}

export const is_task_finished = (status: GoalTaskStatusType): boolean => {
    return status === "finisheddelayed" || status === "finishedontime";
}