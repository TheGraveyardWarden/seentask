import { FC } from "react";
import { IGoalTask } from "../../../types/goal";
import { TouchableOpacity, View } from "react-native";
import { Heading, Text } from "../../typo";
import { getDateStr, getTimeStr } from "../../../utils/date";
import { get_task_bg, goal_task_time_to_string, is_task_finished } from "../../../utils/parser";
import { AIIcon } from "../../../../assets/icons";

const GoalTask: FC<IGoalTask> = ({_id, status, time, title, weight, finished_at}) => {
    const pallete = get_task_bg(status);

    const handlePress = () => {
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
                <AIIcon color={pallete.text} />
            </View>
        </TouchableOpacity>
    )
}

export default GoalTask;