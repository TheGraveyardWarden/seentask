import { FC } from "react";
import { InputTextProps } from "../types";
import { TextInput } from "react-native";
import { useThemeStore } from "../../../stores";

const InputText: FC<InputTextProps> = ({label, setValue, value, inputProps={}, styles={}}) => {
    const theme = useThemeStore(s => s.theme);

    return <TextInput placeholder={label} value={value} style={[{fontFamily: "Sans-Bold", color: theme.background.text}, styles]} placeholderTextColor={theme.icon.color} {...inputProps} onChangeText={setValue} />
}

export default InputText;