import { FlexStyle, StyleProp, ViewStyle } from "react-native";
import { Color } from "../../types";
import { FC } from "react";
import { IconProps } from "../../../assets/icons/types";

export interface ButtonProps {
    label?: string;
    pallete: Color;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle | FlexStyle>;
    loading?: boolean;
}

export interface ButtonIconProps extends ButtonProps {
    Icon: FC<IconProps>;
}