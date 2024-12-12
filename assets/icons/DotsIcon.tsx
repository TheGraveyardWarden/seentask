import { FC } from "react";
import { IconProps } from "./types";
import { useThemeStore } from "../../src/stores";
import Svg, { Circle } from "react-native-svg";

const DotsIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx="12.25" cy="7.25" r="1.25" fill={color || theme.icon.color}/>
    <Circle cx="12.25" cy="12.25" r="1.25" fill={color || theme.icon.color}/>
    <Circle cx="12.25" cy="17.25" r="1.25" fill={color || theme.icon.color}/>
  </Svg>
}

export default DotsIcon;