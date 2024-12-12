import { FC } from "react";
import { View } from "react-native";
import { useThemeStore } from "../../../stores";
import { Heading } from "../../typo";

const GoalProgress: FC<{children: number}> = ({children}) => {
    const theme = useThemeStore(s => s.theme);

    return (
        <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
            <View style={{backgroundColor: theme.icon.color, borderRadius: 8, height: 8, width: 80, position: "relative", overflow: "hidden"}}>
                <View style={{position: "absolute", top: 0, left: 0, height: 8, width: children*80/100, borderRadius: 8, backgroundColor: theme.success.color}} ></View>
            </View>
            <Heading color={theme.overlay.text} >{`${String(children)}%`}</Heading>
        </View>
    )
}

export default GoalProgress;