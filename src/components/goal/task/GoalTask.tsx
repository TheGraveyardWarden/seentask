import { FC } from "react";
import { IGoalTask } from "../../../types/goal";
import { TouchableOpacity, View } from "react-native";
import { Checkbox } from "../../btn";
import { Heading, Text } from "../../typo";
import { useThemeStore } from "../../../stores";
import { getDateStr } from "../../../utils/date";
import { is_task_finished } from "../../../utils/parser";

const GoalTask: FC<IGoalTask> = ({_id, status, time, title, weight, finished_at}) => {
    const theme = useThemeStore(s => s.theme)

    const handlePress = () => {
    }

    return (
        <TouchableOpacity onPress={handlePress} style={{direction: "rtl", paddingHorizontal: 26}}>
            <View style={{flexDirection: "row", gap: 4, alignItems: "flex-start", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", gap: 4, alignItems: "flex-start"}}>
                    <Checkbox value={is_task_finished(status)} setValue={(v) => {}} />
                    <View style={{flexDirection: "column", gap: 4}}>
                        <Heading color={theme.background.text}>{title}</Heading>
                        {!is_task_finished(status) ? <Text color={theme.icon.color}>{`${String(time)} روز`}</Text> : <>
                            <Text color={theme.icon.color}>{getDateStr(finished_at)}</Text>
                        </>}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default GoalTask;