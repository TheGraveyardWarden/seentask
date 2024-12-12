import { FC } from "react";
import { InputTextProps } from "../types";
import { TextInput } from "react-native";

const InputText: FC<InputTextProps> = ({label, setValue, value, inputProps={}, styles={}}) => {
    return <TextInput placeholder={label} value={value} style={[{fontFamily: "Sans-Bold"}, styles]} {...inputProps} onChangeText={setValue} />
}

export default InputText;