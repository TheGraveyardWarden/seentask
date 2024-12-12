import { IGoalDetail, IGoalOverview } from "../../types/goal";
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
}

export default GoalApi;