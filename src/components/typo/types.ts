import { type StyleProp, type TextStyle } from "react-native";
import { FontFamily } from "../../types";

export interface TypoProps {
    color: string;
    fontFamily: FontFamily;
    size: number;
    children?: string;
    styles?: StyleProp<TextStyle>;
}

export interface TextProps {
    color: string;
    size?: number;
    children?: string;
    styles?: StyleProp<TextStyle>;
}