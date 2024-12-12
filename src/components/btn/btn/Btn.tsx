import { FC } from "react";
import { ButtonProps } from "../types";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Heading } from "../../typo";

const Btn: FC<ButtonProps> = ({label, pallete, onPress=()=>{}, styles={}, loading = false}) => {
    const handlePress = () => {
        if (!loading) onPress();
    }

    return (
        <TouchableOpacity style={[{
            backgroundColor: pallete.color,
            minWidth: 148,
            borderRadius: 8,
            height: 48,
            alignItems: "center",
            justifyContent: "center"
        }, styles]} onPress={handlePress}>
            {loading ? <ActivityIndicator/> : <Heading styles={{textAlign: "center"}} size={16} color={pallete.text}>{label}</Heading>}
        </TouchableOpacity>
    )
}

export default Btn;