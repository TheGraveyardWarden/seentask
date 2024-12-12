import { useLocalSearchParams } from "expo-router";
import { FC, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../../components/header";
import { AIIcon, CalendarIcon, DotsIcon, TaskAddIcon } from "../../../../assets/icons";
import { GoalApi } from "../../../api";
import { IGoalDetail } from "../../../types/goal";
import { Heading } from "../../../components/typo";
import { useAlertStore, useThemeStore } from "../../../stores";
import { parse_goal_difficulity, parse_goal_prio } from "../../../utils/parser";
import { getDateStr } from "../../../utils/date";
import GoalProgress from "../../../components/goal/progress/GoalProgress";
import { GoalTask } from "../../../components/goal";
import { Btn, BtnIcon } from "../../../components/btn";

const GoalDetail: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const {id} = useLocalSearchParams();
    const [goal, setGoal] = useState<IGoalDetail | null>(null);

    useEffect(() => {
        GoalApi.get_details(id as string).then(res => {
            setGoal(res);
        }).catch(err => {
            pushAlert(err.msg, "error");
        })
    }, [])

    const onStart = () => {
        if (!goal) return;
        GoalApi.start(goal?._id.$oid).then(res => {
            setGoal(res);
        }).catch(err => {
            pushAlert(err.msg, "error");
        })
    }

    if (!goal) return <Heading color={theme.background.text}>Loading...</Heading>

    return (
        <View style={{flex: 1}}>
            <View style={{
                padding: 24,
                borderBottomColor: theme.icon.color,
                borderBottomWidth: 1,
                marginBottom: 32
            }}>
                <Header Icon={DotsIcon} title={goal.title} />
                <View style={{flexDirection: "row-reverse", alignItems: "center", gap: 8, padding: 16}}>
                    <View style={{paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12.5, borderWidth: 1, borderColor: theme.primary.color, backgroundColor: theme.primary.color}}>
                        <Heading color={theme.primary.text} size={12}>{parse_goal_prio(goal.priority)}</Heading>
                    </View>
                    <View style={{paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12.5, borderWidth: 1, borderColor: theme.secondary.color, backgroundColor: theme.secondary.color}}>
                        <Heading color={theme.secondary.text} size={12}>{parse_goal_difficulity(goal.difficulity)}</Heading>
                    </View>
                </View>

                <View style={{flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", padding: 16}}>
                    <View style={{flexDirection: "row-reverse", alignItems: "center", gap: 4}}>
                        <CalendarIcon width={16} height={16} />
                        <Heading color={theme.icon.color} size={12} >{getDateStr(goal.created_at)}</Heading>
                    </View>
                    <GoalProgress>{goal.progress}</GoalProgress>
                </View>
            </View>

            <ScrollView contentContainerStyle={{gap: 16}}>
                {goal.tasks.map(task => (
                    <GoalTask {...task} key={task._id.$oid} />
                ))}
            </ScrollView>
            
            <View style={{position: "absolute", bottom: 40, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8}}>
                <BtnIcon styles={{borderColor: theme.primary.color, borderWidth: 1}} Icon={AIIcon} label="" pallete={{color: theme.nav.color, text: theme.primary.color}} />
                {goal.status === "created" ? <Btn onPress={onStart} label="شروع" pallete={{color: theme.nav.color, text: theme.primary.color}} styles={{borderColor: theme.primary.color, borderWidth: 1, minWidth: 76, height: 40}} /> : <></>}
                <BtnIcon Icon={TaskAddIcon} label="افزودن وظیفه" pallete={theme.primary} />
            </View>
        </View>
    )
}

export default GoalDetail;