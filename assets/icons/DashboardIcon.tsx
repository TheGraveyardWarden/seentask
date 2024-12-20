import { FC } from "react";
import { IconProps } from "./types";
import { useThemeStore } from "../../src/stores";
import Svg, { Path } from "react-native-svg";

const DashboardIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2H4ZM16 2C14.8954 2 14 2.89543 14 4V8C14 9.10457 14.8954 10 16 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2H16ZM2 16C2 14.8954 2.89543 14 4 14H8C9.10457 14 10 14.8954 10 16V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20V16ZM16 14C14.8954 14 14 14.8954 14 16V20C14 21.1046 14.8954 22 16 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14H16Z" fill={color || theme.icon.color}/>
    </Svg>
}

export default DashboardIcon;