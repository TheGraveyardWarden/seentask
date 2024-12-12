import { FC, useState } from "react";
import { ModalProps } from "../types";
import { Modal, TouchableOpacity, View } from "react-native";
import { useAlertStore, useThemeStore } from "../../../../stores";
import { ArrowLeftIcon, TaskAddIcon } from "../../../../../assets/icons";
import { Heading } from "../../../typo";
import { Input } from "../../../input";
import { IGoalTaskTime } from "../../../../types/goal";
import { Btn } from "../../../btn";
import { GoalApi } from "../../../../api";
import { AddGoalTaskModalProps } from "./types";

const AddGoalTaskModal: FC<ModalProps & AddGoalTaskModalProps> = ({setVisible, visible, goal, setGoal}) => {
    const theme = useThemeStore(s => s.theme);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const [title, setTitle] = useState<string>("");
    const [time, setTime] = useState<IGoalTaskTime>({days: 0, hours: 1, minutes: 0});
    const [weight, setWeight] = useState<number>(1);

    const onAdd = () => {
        if (!title || (!time.days && !time.hours && !time.minutes) || !weight) return pushAlert("bad input!", "error");

        GoalApi.add_task(goal._id.$oid, title, time, weight).then(res => {
            setGoal(prev => {
                return {...prev, tasks: [...prev.tasks, res]}
            });
            setVisible(false)
        }).catch(err => {
            pushAlert(err.msg, "error");
        });
    }

    return (
        <Modal transparent visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", direction: "rtl", backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
            <View style={{
                marginHorizontal: 8,
                borderRadius: 20,
                width: "95%",
                backgroundColor: theme.background.color,
                elevation: 10,
                padding: 16,
            }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 25}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8}}>
                        <TaskAddIcon width={24} height={24} color={theme.background.text} />
                        <Heading color={theme.background.text}>افزودن وظیفه جدید</Heading>
                    </View>
                    <TouchableOpacity onPress={() => setVisible(false)}><ArrowLeftIcon width={24} height={24} color={theme.background.text} /></TouchableOpacity>
                </View>

                <Input label="عنوان هدف" value={title} setValue={setTitle} />
                <Heading color={theme.background.text} styles={{margin: 16}}>زمان</Heading>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginBottom: 16}}>
                    <View style={{flexDirection: "column", width: "30%"}}>
                        <Heading color={theme.background.text}>روز</Heading>
                        <Input label="روز" value={time.days.toString()} setValue={(v) => {setTime(prev => ({...prev, days: isNaN(Number(v)) ? 0 : Number(v)}))}} />
                    </View>
                    <View style={{flexDirection: "column", width: "30%"}}>
                        <Heading color={theme.background.text}>ساعت</Heading>
                        <Input label="ساعت" value={time.hours.toString()} setValue={(v) => {setTime(prev => ({...prev, hours: isNaN(Number(v)) ? 0 : Number(v)}))}} />
                    </View>
                    <View style={{flexDirection: "column", width: "30%"}}>
                        <Heading color={theme.background.text}>دقیقه</Heading>
                        <Input label="دقیقه" value={time.minutes.toString()} setValue={(v) => {setTime(prev => ({...prev, minutes: isNaN(Number(v)) ? 0 : Number(v)}))}} />
                    </View>
                </View>

                <Heading color={theme.background.text} styles={{margin: 16}}>وزن</Heading>
                <Input label="وزن" styles={{marginBottom: 16}} value={weight.toString()} setValue={(v) => setWeight(isNaN(Number(v)) ? 1 : Number(v))} />

                <Btn onPress={onAdd} label="افزودن" pallete={theme.primary} />
            </View>
        </View>
        </Modal>
    )
}

export default AddGoalTaskModal;