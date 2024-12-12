import { FC } from "react";
import { View } from "react-native";
import { CheckboxProps } from "./types";
import { useThemeStore } from "../../../stores";
import { CheckIcon } from "../../../../assets/icons";

const Checkbox: FC<CheckboxProps> = ({setValue, value, styles={}}) => {
    const theme = useThemeStore(s => s.theme);
    return <View style={{width: 16, height: 16, borderRadius: 4, borderColor: theme.background.text, borderWidth: 1, backgroundColor: theme.overlay.color,
        alignItems: "center", justifyContent: "center"
    }}>
        {value ? <CheckIcon color={theme.success.color} width={10} height={10}/> : <></>}
    </View>
}

export default Checkbox;