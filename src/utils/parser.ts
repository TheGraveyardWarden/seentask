import { useThemeStore } from "../stores";
import { Color } from "../types";
import { GoalDifficulitiesType, GoalPrioType, GoalTaskStatusType, IGoalTaskTime } from "../types/goal";

export const is_task_finished = (status: GoalTaskStatusType): boolean => {
    return status === "finisheddelayed" || status === "finishedontime";
}

export const goal_task_time_to_string = (time: IGoalTaskTime): string => {
    let t = JSON.parse(time.toString());
    let txt = "";

    txt += t.days ? `${t.days} روز ` : "";
    txt += t.hours ? `${t.hours} ساعت ` : "";
    txt += t.minutes ? `${t.minutes} دقیقه` : "";

    return txt;
}

export const get_task_bg = (status: GoalTaskStatusType): Color => {
    switch(status) {
        case "finishedontime": return useThemeStore.getState().theme.success;
        case "finisheddelayed": return useThemeStore.getState().theme.info;
        case "inprogress": return useThemeStore.getState().theme.primary;
        case "waiting": return useThemeStore.getState().theme.overlay;
        default: return {color: "red", text: "white"};
    }
}

export const prio2farsi = (prio: GoalPrioType): string => {
    switch(prio) {
        case "optional": return "غیر ضروری";
        case "required": return "ضروری";
        case "urgent": return "فوری";
        default: return "unknown";
    }
}

export const diff2farsi = (diff: GoalDifficulitiesType): string => {
    switch(diff) {
        case "easy": return "آسان";
        case "hard": return "سخت";
        case "moderate": return "متوسط";
        case "veryhard": return "خیلی سخت";
        default: return "unknown";
    }
}