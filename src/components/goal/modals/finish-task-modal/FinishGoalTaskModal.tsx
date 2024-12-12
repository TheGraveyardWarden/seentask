import { FC, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { ModalProps } from "../types";
import { Heading } from "../../../typo";
import { useAlertStore, useThemeStore } from "../../../../stores";
import { ArrowLeftIcon, TaskManagementIcon } from "../../../../../assets/icons";
import { FinishGoalTaskModalProps } from "./types";
import { Input } from "../../../input";
import { Btn } from "../../../btn";
import { GoalApi } from "../../../../api";

const FinishGoalTaskModal: FC<ModalProps & FinishGoalTaskModalProps> = ({visible, setVisible, task, goal, setGoal}) => {
    const theme = useThemeStore(s => s.theme);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const [note, setNote] = useState<string>("");

    const onConfirm = () => {
        GoalApi.finish_task(goal._id.$oid, task._id.$oid, note).then((res => {
            setGoal(res);
            setVisible(false);
        })).catch(err => {
            pushAlert(err.msg, "error");
        })
    }

    return <Modal transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
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
                        <TaskManagementIcon width={24} height={24} color={theme.background.text} />
                        <Heading color={theme.background.text}>تکمیل تسک</Heading>
                    </View>
                    <TouchableOpacity onPress={() => setVisible(false)}><ArrowLeftIcon width={24} height={24} color={theme.background.text} /></TouchableOpacity>
                </View>

                <View style={{gap: 16}}>
                    <Input label="یادداشت (اختیاری)" value={note} setValue={setNote} />
                    <Btn onPress={onConfirm} label="تایید" pallete={theme.primary} />
                </View>
            </View>
        </View>
    </Modal>
}

export default FinishGoalTaskModal;