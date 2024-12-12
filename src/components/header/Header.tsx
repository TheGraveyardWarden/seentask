import { FC } from "react";
import { HeaderProps } from "./types";
import { TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "../../../assets/icons";
import { useThemeStore } from "../../stores";
import { Heading } from "../typo";
import { useRouter } from "expo-router";

const Header: FC<HeaderProps> = ({Icon, title}) => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();

    return (
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={() => router.back()}><ArrowLeftIcon width={24} height={24} color={theme.background.text}/></TouchableOpacity>
                <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                    <Heading color={theme.background.text}>{title}</Heading>
                    <Icon width={24} height={24} color={theme.background.text}/>
                </View>
            </View>
    )
}

export default Header;