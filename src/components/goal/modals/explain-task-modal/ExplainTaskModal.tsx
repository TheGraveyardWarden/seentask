import { FC } from "react";
import { ModalProps } from "../types";
import { Modal, TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../../../../stores";
import { AIIcon, ArrowLeftIcon, TaskManagementIcon } from "../../../../../assets/icons";
import { Heading, Text } from "../../../typo";
import { ExplainTaskModalProps } from "./types";

const ExplainTaskModal: FC<ModalProps & ExplainTaskModalProps> = ({setVisible, visible, text}) => {
    const theme = useThemeStore(s => s.theme)

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
                            <AIIcon width={24} height={24} color={theme.background.text} />
                            <Heading color={theme.background.text}>توضیح وظیفه توسط هوش مصنوعی</Heading>
                        </View>
                        <TouchableOpacity onPress={() => setVisible(false)}><ArrowLeftIcon width={24} height={24} color={theme.background.text} /></TouchableOpacity>
                    </View>

                    <Text color={theme.background.text} >{text}</Text>
                </View>
            </View>
        </Modal>
    )
}

export default ExplainTaskModal;