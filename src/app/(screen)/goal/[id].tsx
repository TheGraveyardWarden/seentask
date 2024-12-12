import { useLocalSearchParams } from "expo-router";
import { FC, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../../components/header";
import { AIIcon, CalendarIcon, DotsIcon, TaskAddIcon } from "../../../../assets/icons";
import { GoalApi } from "../../../api";
import { IGoalDetail } from "../../../types/goal";
import { Heading } from "../../../components/typo";
import { useAlertStore, useThemeStore } from "../../../stores";
import { getDateStr } from "../../../utils/date";
import GoalProgress from "../../../components/goal/progress/GoalProgress";
import { GoalTask, Prio } from "../../../components/goal";
import { Btn, BtnIcon } from "../../../components/btn";
import { UpdateFn } from "../../../types";
import { AddGoalTaskModal } from "../../../components/goal/modals";
import Difficulity from "../../../components/goal/difficulity/Difficulity";

const GoalDetail: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const {id} = useLocalSearchParams();
    const [goal, setGoal] = useState<IGoalDetail | null>(null);
    const [addTaskModalVisible, setAddTaskModalVisible] = useState<boolean>(false);

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
                    <Prio active>{goal.priority}</Prio>
                    <Difficulity active>{goal.difficulity}</Difficulity>
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
                    <GoalTask setGoal={setGoal as UpdateFn<IGoalDetail>} task={task} goal={goal} key={task._id.$oid} />
                ))}
            </ScrollView>
            <View style={{height: 16}}></View>
            
            <View style={{position: "absolute", bottom: 40, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8}}>
                <BtnIcon styles={{borderColor: theme.primary.color, borderWidth: 1}} Icon={AIIcon} label="" pallete={{color: theme.nav.color, text: theme.primary.color}} />
                {goal.status === "created" ? <Btn onPress={onStart} label="شروع" pallete={{color: theme.nav.color, text: theme.primary.color}} styles={{borderColor: theme.primary.color, borderWidth: 1, minWidth: 76, height: 40}} /> : <></>}
                <BtnIcon onPress={() => setAddTaskModalVisible(true)} Icon={TaskAddIcon} label="افزودن وظیفه" pallete={theme.primary} />
            </View>

            <AddGoalTaskModal goal={goal} setGoal={setGoal as UpdateFn<IGoalDetail>} visible={addTaskModalVisible} setVisible={setAddTaskModalVisible} />
        </View>
    )
}

export default GoalDetail;