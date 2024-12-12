import { FlexStyle, StyleProp, ViewStyle } from "react-native";
import { Color, UpdateFn } from "../../types";

export interface ButtonProps {
    label: string;
    pallete: Color;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle | FlexStyle>;
    loading?: boolean;
}