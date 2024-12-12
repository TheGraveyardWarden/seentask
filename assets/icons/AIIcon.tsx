import { FC } from "react";
import { IconProps } from "./types";
import { useThemeStore } from "../../src/stores";
import Svg, { Path } from "react-native-svg";

const AIIcon: FC<IconProps> = ({color, height=24, width=24}) => {
    const theme = useThemeStore(s => s.theme);

    return <Svg width={width} height={height} viewBox="0 0 20 18" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M9 0H11C15.9706 0 20 4.02944 20 9C20 13.9706 15.9706 18 11 18H4C1.79086 18 0 16.2091 0 14V9C0 4.02944 4.02944 0 9 0ZM6.54716 10.487C6.26386 10.1849 5.78923 10.1696 5.48705 10.4528C5.18486 10.7361 5.16955 11.2108 5.45285 11.513C6.8038 12.954 8.36472 13.75 10 13.75C11.6353 13.75 13.1962 12.954 14.5472 11.513C14.8305 11.2108 14.8151 10.7361 14.513 10.4528C14.2108 10.1696 13.7361 10.1849 13.4528 10.487C12.3038 11.7127 11.1147 12.25 10 12.25C8.88528 12.25 7.6962 11.7127 6.54716 10.487Z" fill={color || theme.icon.color}/>
  </Svg>
}

export default AIIcon;