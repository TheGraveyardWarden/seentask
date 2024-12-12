import { FC } from "react";
import { InputTextProps } from "../types";
import InputText from "../input-text/InputText";
import { useThemeStore } from "../../../stores";

const Input: FC<InputTextProps> = ({label, setValue, value, inputProps={}, styles={}}) => {
    const theme = useThemeStore(s => s.theme);

    return <InputText label={label} value={value} setValue={setValue} inputProps={inputProps} styles={[{
        padding: 16,
        borderRadius: 8,
        borderColor: theme.icon.color,
        borderWidth: 1,
        width: "100%",
        height: 48
    }, styles]} />
}

export default Input;