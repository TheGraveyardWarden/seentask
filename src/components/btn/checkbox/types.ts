import { FlexStyle, StyleProp, ViewStyle } from "react-native";
import { UpdateFn } from "../../../types";

export interface CheckboxProps {
    value: boolean;
    setValue: UpdateFn<boolean>;
    styles?: StyleProp<FlexStyle | ViewStyle>;
}