import { FC, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TaskManagementIcon } from "../../../../assets/icons";
import Header from "../../../components/header";
import { Heading } from "../../../components/typo";
import { useThemeStore } from "../../../stores";
import { Slot, useRouter, useSegments } from "expo-router";

interface Option {
    name: string;
    header: string;
    title: string;
}

const OPTIONS: Option[] = [
    {
        name: "goals",
        header: "مدیریت هدف ها",
        title: "هدف های من"
    },
    {
        name: "events",
        header: "مدیریت رویداد ها",
        title: "رویداد های من"
    }
]

const TasksLayout: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();
    const segments = useSegments();
    const [selectedOptionIdx, setSelectedOptionIdx] = useState<number>(0);

    useEffect(() => {
        OPTIONS.forEach((option, i) => {
            if (segments.includes(option.name)) setSelectedOptionIdx(i);
        })
    }, [segments])

    return (
        <View style={{flex: 1, padding: 24}} >
            <Header title={OPTIONS[selectedOptionIdx].header} Icon={TaskManagementIcon} />
            <View style={{flexDirection: "row-reverse", gap: 8, alignItems: "center", marginVertical: 20}}>                
                {OPTIONS.map((option, i) => (
                    <TouchableOpacity key={option.name} onPress={() => router.push(`/tasks/${option.name}`)} style={{paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12.5, borderWidth: 1, borderColor: theme.primary.color, backgroundColor: i !== selectedOptionIdx ? "transparent" : theme.primary.color}}>
                        <Heading color={i !== selectedOptionIdx ? theme.primary.color : theme.primary.text} size={12}>{option.title}</Heading>
                    </TouchableOpacity>
                ))}
            </View>
            <Slot/>
        </View>
    )
}

export default TasksLayout;