import { IGoalDetail, IGoalOverview } from "../../types/goal";
import Api from "../api";

class GoalApi extends Api {
    static my_goals(): Promise<IGoalOverview[]> {
        return this.getData("/api/user/my-goals");
    }

    static get_details(id: string): Promise<IGoalDetail> {
        return this.getData(`/api/goal/detail/${id}`);
    }
}

export default GoalApi;