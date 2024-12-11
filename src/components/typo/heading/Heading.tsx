import { FunctionComponent } from "react";
import { TextProps } from "../types";
import Typo from "../Typo";

const Heading: FunctionComponent<TextProps> = ({color, children="", size=16, styles={}}) => {
    return <Typo color={color} fontFamily="Sans-Bold" size={size} styles={styles} >{children}</Typo>
}

export default Heading;