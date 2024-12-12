import { FC } from "react";
import { IconProps } from "../../../assets/icons/types";

export interface HeaderProps {
    title: string;
    Icon: FC<IconProps>;
}