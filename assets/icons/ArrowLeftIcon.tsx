import { FC } from "react";
import { IconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { useThemeStore } from "../../src/stores";

const ArrowLeftIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M14 7L10 12L14 17" stroke={color || theme.icon.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
}

export default ArrowLeftIcon;