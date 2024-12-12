import { UpdateFn } from "../../../../types";
import { IGoalDetail } from "../../../../types/goal";

export interface AddGoalTaskModalProps {
    goal: IGoalDetail;
    setGoal: UpdateFn<IGoalDetail>;
}