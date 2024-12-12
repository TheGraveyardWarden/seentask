import { FlexStyle, StyleProp, TextInputProps, ViewStyle } from "react-native";
import { UpdateFn } from "../../types";

export interface InputTextProps {
    value: string;
    setValue: UpdateFn<string>;
    label: string;
    styles?: StyleProp<FlexStyle | ViewStyle>;
    inputProps?: TextInputProps;
}

export interface InputPasswordProps extends InputTextProps {
    conStyles?: StyleProp<FlexStyle | ViewStyle>;
}