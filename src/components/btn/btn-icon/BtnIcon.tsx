import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ButtonIconProps } from "../types";
import { Heading } from "../../typo";

const BtnIcon: FC<ButtonIconProps> = ({Icon, label, pallete, loading=false, onPress=()=>{}, styles={}}) => {
    const handlePress = () => {
        if (!loading) onPress();
    }

    return <TouchableOpacity onPress={handlePress} style={[{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: pallete.color,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        gap: 8,
        height: 40
    }, styles]}>
        {label ? <Heading color={pallete.text}>{label}</Heading> : <></>}
        <Icon width={20} height={20} color={pallete.text} />
    </TouchableOpacity>
}

export default BtnIcon;