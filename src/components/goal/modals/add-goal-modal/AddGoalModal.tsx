import { FC, useState } from "react";
import { ModalProps } from "../types";
import { Modal, TouchableOpacity, View } from "react-native";
import { useAlertStore, useThemeStore } from "../../../../stores";
import { ArrowLeftIcon, TaskAddIcon } from "../../../../../assets/icons";
import { Heading } from "../../../typo";
import { Input } from "../../../input";
import { GoalDifficulitiesType, GoalPrioType } from "../../../../types/goal";
import Prio from "../../prio/Prio";
import Difficulity from "../../difficulity/Difficulity";
import { Btn } from "../../../btn";
import { GoalApi } from "../../../../api";
import { useRouter } from "expo-router";

const AddGoalModal: FC<ModalProps> = ({setVisible, visible}) => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();
    const pushAlert = useAlertStore(s => s.pushAlert);
    const [title, setTitle] = useState<string>("");
    const [priority, setPriority] = useState<GoalPrioType>("optional");
    const [difficulity, setDifficulity] = useState<GoalDifficulitiesType>("easy");

    const onAdd = () => {
        if (!title) return pushAlert("title is required!", "error");

        GoalApi.create(title, priority, difficulity).then(goal => {
            router.push(`/goal/${goal._id.$oid}`);
            setVisible(false);
        }).catch(err => {
            pushAlert(err.msg, "error");
        })
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
                            <Heading color={theme.background.text}>افزودن هدف جدید</Heading>
                        </View>
                        <TouchableOpacity onPress={() => setVisible(false)}><ArrowLeftIcon width={24} height={24} color={theme.background.text} /></TouchableOpacity>
                    </View>

                    <View style={{gap: 32, flexDirection: "column"}}>
                        <Input label="عنوان هدف" value={title} setValue={setTitle} />
                        
                        <View style={{gap: 4}}>
                            <Heading color={theme.background.text}>الویت هدف</Heading>
                            <View style={{flexDirection: "row", gap: 8}}>
                                <TouchableOpacity onPress={() => setPriority("optional")} ><Prio active={priority === "optional"}>{"optional" as GoalPrioType}</Prio></TouchableOpacity>
                                <TouchableOpacity onPress={() => setPriority("required")} ><Prio active={priority === "required"}>{"required" as GoalPrioType}</Prio></TouchableOpacity>
                                <TouchableOpacity onPress={() => setPriority("urgent")} ><Prio active={priority === "urgent"}>{"urgent" as GoalPrioType}</Prio></TouchableOpacity>
                            </View>
                        </View>

                        <View style={{gap: 4}}>
                            <Heading color={theme.background.text}>درجه سختی هدف</Heading>
                            <View style={{flexDirection: "row", gap: 8}}>
                                <TouchableOpacity onPress={() => setDifficulity("easy")} ><Difficulity active={difficulity === "easy"}>{"easy" as GoalDifficulitiesType}</Difficulity></TouchableOpacity>
                                <TouchableOpacity onPress={() => setDifficulity("moderate")} ><Difficulity active={difficulity === "moderate"}>{"moderate" as GoalDifficulitiesType}</Difficulity></TouchableOpacity>
                                <TouchableOpacity onPress={() => setDifficulity("hard")} ><Difficulity active={difficulity === "hard"}>{"hard" as GoalDifficulitiesType}</Difficulity></TouchableOpacity>
                                <TouchableOpacity onPress={() => setDifficulity("veryhard")} ><Difficulity active={difficulity === "veryhard"}>{"veryhard" as GoalDifficulitiesType}</Difficulity></TouchableOpacity>
                            </View>
                        </View>

                        <Btn pallete={theme.primary} label="افزودن" onPress={onAdd} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddGoalModal