import { FC } from "react";
import { IGoalOverview } from "../../../types/goal";
import { TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../../../stores";
import TaskStatus from "../../goal-status";
import { Heading } from "../../typo";
import { parse_goal_difficulity, parse_goal_prio } from "../../../utils/parser";
import { CalendarIcon } from "../../../../assets/icons";
import { getDateStr } from "../../../utils/date";
import GoalProgress from "../progress/GoalProgress";

const GoalOverview: FC<IGoalOverview> = ({_id, created_at, difficulity, priority, progress, status, title}) => {
    const theme = useThemeStore(s => s.theme);

    return (
        <TouchableOpacity style={{width: "100%", padding: 16, backgroundColor: theme.overlay.color, borderRadius: 16, height: 112, gap: 8, justifyContent: "space-between"}}>
            <View style={{gap: 8}}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <TaskStatus status={status} />
                    <Heading color={theme.overlay.text} size={12} >{title}</Heading>
                </View>
                <View style={{flexDirection: "row-reverse", alignItems: "center", gap: 8}}>
                    <View style={{paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12.5, borderWidth: 1, borderColor: theme.primary.color, backgroundColor: theme.primary.color}}>
                        <Heading color={theme.primary.text} size={12}>{parse_goal_prio(priority)}</Heading>
                    </View>
                    <View style={{paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12.5, borderWidth: 1, borderColor: theme.secondary.color, backgroundColor: theme.secondary.color}}>
                        <Heading color={theme.secondary.text} size={12}>{parse_goal_difficulity(difficulity)}</Heading>
                    </View>
                </View>
            </View>

            <View style={{flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row-reverse", alignItems: "center", gap: 4}}>
                    <CalendarIcon width={16} height={16} />
                    <Heading color={theme.icon.color} size={12} >{getDateStr(created_at)}</Heading>
                </View>
                <GoalProgress>{progress}</GoalProgress>
            </View>
        </TouchableOpacity>
    )
}

export default GoalOverview;