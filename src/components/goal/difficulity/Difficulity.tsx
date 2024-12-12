import { FC } from "react";
import { View } from "react-native";
import { useThemeStore } from "../../../stores";
import { GoalDifficulitiesType } from "../../../types/goal";
import { Heading } from "../../typo";
import { diff2farsi } from "../../../utils/parser";
import { DifficulityProps } from "./types";

const get_color = (diff: GoalDifficulitiesType): string => {
    switch(diff) {
        case "easy": return useThemeStore.getState().theme.success.color;
        case "hard": return useThemeStore.getState().theme.secondary.color;
        case "moderate": return useThemeStore.getState().theme.info.color;
        case "veryhard": return useThemeStore.getState().theme.primary.color;
        default: return "red";
    }
}

const Difficulity: FC<DifficulityProps> = ({children, active}) => {
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
        <Heading color={active ? theme.background.color : get_color(children)}>{diff2farsi(children)}</Heading>
    </View>
}

export default Difficulity;