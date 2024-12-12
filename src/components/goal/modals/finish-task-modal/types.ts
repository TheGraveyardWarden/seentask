import { ObjectID, UpdateFn } from "../../../../types";
import { IGoalDetail, IGoalTask } from "../../../../types/goal";

export interface FinishGoalTaskModalProps {
    task: IGoalTask;
    goal: IGoalDetail;
    setGoal: UpdateFn<IGoalDetail>;
}