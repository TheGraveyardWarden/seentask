import { FC } from "react";
import { IGoalOverview } from "../../../types/goal";
import { TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../../../stores";
import TaskStatus from "../../goal-status";
import { Heading } from "../../typo";
import { CalendarIcon } from "../../../../assets/icons";
import { getDateStr } from "../../../utils/date";
import GoalProgress from "../progress/GoalProgress";
import { useRouter } from "expo-router";
import Prio from "../prio/Prio";
import Difficulity from "../difficulity/Difficulity";

const GoalOverview: FC<IGoalOverview> = ({_id, created_at, difficulity, priority, progress, status, title}) => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push(`/goal/${_id.$oid}`)} style={{width: "100%", padding: 16, backgroundColor: theme.overlay.color, borderRadius: 16, height: 112, gap: 8, justifyContent: "space-between"}}>
            <View style={{gap: 8}}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <TaskStatus status={status} />
                    <Heading color={theme.overlay.text} size={12} >{title}</Heading>
                </View>
                <View style={{flexDirection: "row-reverse", alignItems: "center", gap: 8}}>
                    <Prio active>{priority}</Prio>
                    <Difficulity active>{difficulity}</Difficulity>
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