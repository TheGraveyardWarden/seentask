import { FC } from "react";
import { IconProps } from "./types";
import { useThemeStore } from "../../src/stores";
import Svg, { Path } from "react-native-svg";

const CalendarIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path d="M10.6665 1.33334V3.33334" stroke={color || theme.icon.color} strokeLinecap="round"/>
    <Path d="M5.3335 1.33334V3.33334" stroke={color || theme.icon.color} strokeLinecap="round"/>
    <Path d="M2 4.33334C2 3.22877 2.89543 2.33334 4 2.33334H12C13.1046 2.33334 14 3.22877 14 4.33334V12.6667C14 13.7712 13.1046 14.6667 12 14.6667H4C2.89543 14.6667 2 13.7712 2 12.6667V4.33334Z" stroke={color || theme.icon.color}/>
    <Path d="M2 6H14" stroke={color || theme.icon.color} strokeLinecap="round"/>
  </Svg>
}

export default CalendarIcon;