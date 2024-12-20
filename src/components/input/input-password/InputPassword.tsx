import { FC, useState } from "react";
import { InputPasswordProps } from "../types";
import { TextInput, TouchableOpacity, View } from "react-native";
import { EyeIcon } from "../../../../assets/icons";
import { useThemeStore } from "../../../stores";

const InputPassword: FC<InputPasswordProps> = ({label, setValue, value, inputProps={}, styles={}, conStyles={}}) => {
    const theme = useThemeStore(s => s.theme);
    const [secure, setSecure] = useState<boolean>(true);

    return (
        <View style={[{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 8,
            borderColor: theme.icon.color,
            borderWidth: 1,
            width: "100%",
            height: 48,
            gap: 10

        }, conStyles]}>
            <TouchableOpacity style={{marginLeft: 16}} onPress={() => setSecure(prev => !prev)}><EyeIcon/></TouchableOpacity>
            <TextInput value={value} onChangeText={setValue} placeholder={label} secureTextEntry={secure} style={[{
                width: "80%",
                padding: 16,
                textAlign: "right",
                fontFamily: "Sans-Bold",
                color: theme.background.text
            }, styles]} placeholderTextColor={theme.icon.color} {...inputProps} />
        </View>
    )
}

export default InputPassword;