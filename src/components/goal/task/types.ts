import { UpdateFn } from "../../../types";
import { IGoalDetail, IGoalTask } from "../../../types/goal";

export interface GoalTaskProps {
    goal: IGoalDetail;
    task: IGoalTask;
    setGoal: UpdateFn<IGoalDetail>;
}