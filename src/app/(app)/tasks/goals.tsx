import { FC, useEffect, useState } from "react";
import { IGoalOverview } from "../../../types/goal";
import { GoalApi } from "../../../api";
import { useAlertStore } from "../../../stores";
import { ScrollView } from "react-native";
import GoalOverview from "../../../components/goal";

const Goals: FC = () => {
    const [goals, setGoals] = useState<IGoalOverview[]>([]);
    const pushAlert = useAlertStore(s => s.pushAlert);

    useEffect(() => {
        GoalApi.my_goals().then(res => {
            setGoals(res);
        }).catch(err => {
            pushAlert(err.msg, "error");
        })
    }, [])

    return (
        <ScrollView contentContainerStyle={{gap: 8}}>
            {goals.map((goal) => (
                <GoalOverview {...goal} key={goal._id.$oid} />
            ))}
        </ScrollView>
    )
}

export default Goals;