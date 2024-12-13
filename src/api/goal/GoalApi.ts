import { GoalDifficulitiesType, GoalPrioType, IGoalDetail, IGoalOverview, IGoalTask, IGoalTaskTime } from "../../types/goal";
import Api from "../api";

class GoalApi extends Api {
    static my_goals(): Promise<IGoalOverview[]> {
        return this.getData("/api/user/my-goals");
    }

    static get_details(id: string): Promise<IGoalDetail> {
        return this.getData(`/api/goal/detail/${id}`);
    }

    static start(id: string): Promise<IGoalDetail> {
        return this.postData(`/api/goal/start/${id}`);
    }

    static finish_task(goal_id: string, task_id: string, note: string): Promise<IGoalDetail> {
        console.log(goal_id, task_id);
        return this.postData(`/api/goal/finish_task/${goal_id}/${task_id}`, {note});
    }

    static add_task(goal_id: string, title: string, required_time: IGoalTaskTime, weight: number): Promise<IGoalTask> {
        return this.patchData(`/api/goal/add_task/${goal_id}`, {title, required_time, weight});
    }

    static create(title: string, priority: GoalPrioType, difficulity: GoalDifficulitiesType): Promise<IGoalDetail> {
        return this.postData(`/api/goal`, {title, priority, difficulity, tasks: []});
    }

    static gen_tasks(goal_id: string): Promise<IGoalDetail> {
        return this.getData(`/api/ai/gen_tasks/${goal_id}`);
    }

    static explain_task(goal_id: string, task_id: string): Promise<string> {
        return this.getData(`/api/ai/explain_task/${goal_id}/${task_id}`);
    }
}

export default GoalApi;