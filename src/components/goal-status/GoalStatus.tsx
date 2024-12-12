import { FC } from "react";
import { GoalStatusType } from "../../types/goal";
import { View } from "react-native";
import { useThemeStore } from "../../stores";

const GoalStatus: FC<{status: GoalStatusType}> = ({status}) => {
    const theme = useThemeStore(s => s.theme);
    return <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: status === "started" ? theme.success.color : status === "finished" ? theme.error.color : theme.icon.color}} ></View>
}

export default GoalStatus;