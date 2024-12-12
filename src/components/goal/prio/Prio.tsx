import { FC } from "react";
import { View } from "react-native";
import { PrioProps } from "./types";
import { useThemeStore } from "../../../stores";
import { GoalPrioType } from "../../../types/goal";
import { Heading } from "../../typo";
import { prio2farsi } from "../../../utils/parser";

const get_color = (prio: GoalPrioType): string => {
    switch(prio) {
        case "optional": return useThemeStore.getState().theme.secondary.color;
        case "required": return useThemeStore.getState().theme.primary.color;
        case "urgent": return useThemeStore.getState().theme.success.color;
        default: return "red";
    }
}

const Prio: FC<PrioProps> = ({children, active}) => {
    const theme = useThemeStore(s => s.theme);

    return <View style={{
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 12.5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: get_color(children),
        backgroundColor: active ? get_color(children) : theme.background.color
    }} >
        <Heading color={active ? theme.background.color : get_color(children)}>{prio2farsi(children)}</Heading>
    </View>
}

export default Prio;