import { FC } from "react";
import { IconProps } from "../../assets/icons/types";

export interface NavData {
    Icon: FC<IconProps>;
    route: string;
    name: string;
}