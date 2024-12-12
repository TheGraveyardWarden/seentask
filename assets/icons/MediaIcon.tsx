import { FC } from "react";
import { IconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { useThemeStore } from "../../src/stores";

const MediaIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M22 7.25H15.4573L19.0982 2.15265C20.7734 2.62992 22 4.17171 22 6V7.25ZM2 8.75H22V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V8.75ZM5.61397 7.25H2V6C2 3.79086 3.79086 2 6 2H9.36397L5.61397 7.25ZM7.45733 7.25L11.2073 2H17.3639L13.6139 7.25H7.45733ZM10 13.8028V16.1972C10 17.3953 11.3352 18.1099 12.3321 17.4453L14.1279 16.2481C15.0185 15.6543 15.0185 14.3457 14.1279 13.7519L12.332 12.5547C11.3352 11.8901 10 12.6047 10 13.8028Z" fill={color || theme.icon.color}/>
    </Svg>
}

export default MediaIcon;