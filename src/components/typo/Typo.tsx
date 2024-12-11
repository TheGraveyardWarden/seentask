import { type FunctionComponent } from "react";
import { TypoProps } from "./types";
import { Text } from "react-native";

const Typo: FunctionComponent<TypoProps> = ({
    children="", color, fontFamily, size, styles={}
}) => {
    return <Text style={[{
        color,
        fontFamily,
        fontSize: size,
    }, styles]} >{children}</Text>
}

export default Typo;