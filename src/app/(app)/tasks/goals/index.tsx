import { FC, useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { IGoalOverview } from "../../../../types/goal";
import { useAlertStore, useThemeStore } from "../../../../stores";
import { GoalApi } from "../../../../api";
import {GoalOverview} from "../../../../components/goal";
import { BtnIcon } from "../../../../components/btn";
import { TaskAddIcon } from "../../../../../assets/icons";
import { AddGoalModal } from "../../../../components/goal/modals";

const { width } = Dimensions.get('window');

const Goals: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const [goals, setGoals] = useState<IGoalOverview[]>([]);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const [addGoalModalVisible, setAddGoalModalVisible] = useState<boolean>(false);

    useEffect(() => {
        GoalApi.my_goals().then(res => {
            setGoals(res);
        }).catch(err => {
            pushAlert(err.msg, "error");
        })
    }, [])

    return (
        <>
            <ScrollView contentContainerStyle={{gap: 8}}>
                {goals.map((goal) => (
                    <GoalOverview {...goal} key={goal._id.$oid} />
                ))}
                <View style={{height: 80}}></View>
            </ScrollView>

            <BtnIcon onPress={() => setAddGoalModalVisible(true)} Icon={TaskAddIcon} label="افزودن هدف" pallete={theme.primary} styles={{position: "absolute", bottom: 96, left: "50%", transform: [{translateX: -7/100*width}], elevation: 5}} />

            <AddGoalModal visible={addGoalModalVisible} setVisible={setAddGoalModalVisible} />
        </>
    )
}

export default Goals;