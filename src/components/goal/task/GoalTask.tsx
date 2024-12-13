import { FC, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Heading, Text } from "../../typo";
import { getDateStr, getTimeStr } from "../../../utils/date";
import { get_task_bg, goal_task_time_to_string, is_task_finished } from "../../../utils/parser";
import { AIIcon } from "../../../../assets/icons";
import { useAlertStore, useThemeStore } from "../../../stores";
import { ExplainTaskModal, FinishGoalTaskModal } from "../modals";
import { GoalTaskProps } from "./types";
import { GoalApi } from "../../../api";

const GoalTask: FC<GoalTaskProps> = ({goal, task, setGoal}) => {
    const {_id, status, time, title, weight, finished_at} = task;
    const theme = useThemeStore(s => s.theme);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const pallete = get_task_bg(status);
    const [finishModalVisible, setFinishModalVisible] = useState<boolean>(false);
    const [explainTaskModalVisible, setExplainTaskModalVisible] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [aiLoading, setAILoading] = useState<boolean>(false);

    const handlePress = () => {
        if (status !== "inprogress") return;
        setFinishModalVisible(true);
    }

    const onAI = () => {
        setAILoading(true);
        GoalApi.explain_task(goal._id.$oid, task._id.$oid).then(res => {
            setText(res);
            setExplainTaskModalVisible(true);
        }).catch(err => {
            pushAlert(err.msg, "error");
        }).finally(() => {
            setAILoading(false);
        })
    }

    return (
        <TouchableOpacity onPress={handlePress} style={{direction: "rtl", paddingHorizontal: 13, marginHorizontal: 13, borderRadius: 8, paddingVertical: 10, backgroundColor: pallete.color}}>
            <View style={{flexDirection: "row", gap: 4, alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", gap: 4, alignItems: "flex-start"}}>
                    <View style={{flexDirection: "column", gap: 4}}>
                        <Heading color={pallete.text}>{title}</Heading>
                        {!is_task_finished(status) ? <Text color={pallete.text}>{goal_task_time_to_string(time)}</Text> : <>
                            <Text color={pallete.text}>{`${getDateStr(finished_at)} ${getTimeStr(finished_at)}`}</Text>
                        </>}
                    </View>
                </View>
                {aiLoading ? <ActivityIndicator/> : <TouchableOpacity onPress={onAI}><AIIcon color={status === "waiting" ? theme.primary.color : pallete.text} /></TouchableOpacity>}
                <FinishGoalTaskModal setGoal={setGoal} goal={goal} task={task} setVisible={setFinishModalVisible} visible={finishModalVisible} />
                <ExplainTaskModal text={text} visible={explainTaskModalVisible} setVisible={setExplainTaskModalVisible} />
            </View>
        </TouchableOpacity>
    )
}

export default GoalTask;