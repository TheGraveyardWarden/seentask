import { FC } from "react";
import { IconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { useThemeStore } from "../../src/stores";

const TaskManagementIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme  = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 22 20" fill="none">
    <Path d="M3 13H14C15.6569 13 17 14.3431 17 16C17 17.6569 15.6569 19 14 19H3M3 13V19M3 13H1M3 19H1M3 1H14C15.6569 1 17 2.34315 17 4C17 5.65685 15.6569 7 14 7H3M3 1V7M3 1H1M3 7H1M19 7H8C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13H19M19 7V13M19 7H21M19 13H21" stroke={color || theme.icon.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
}

export default TaskManagementIcon;