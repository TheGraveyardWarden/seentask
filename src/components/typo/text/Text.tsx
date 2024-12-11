import { type FunctionComponent } from "react";
import { TextProps } from "../types";
import Typo from "../Typo";

const Text: FunctionComponent<TextProps> = ({color, children="", size=12, styles={}}) => {
    return <Typo color={color} fontFamily="Sans-Regular" size={size} styles={styles} >{children}</Typo>
}

export default Text;