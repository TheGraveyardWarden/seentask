import { FC, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../stores";
import { NavData } from "./types";
import { DashboardIcon, MediaIcon, ProfileIcon, TaskIcon, TrophyIcon } from "../../assets/icons";
import { useRouter, useSegments } from "expo-router";

const NAV_DATA: NavData[] = [
    {
        Icon: DashboardIcon,
        route: "/",
        name: "(app)"
    },
    {
        Icon: TaskIcon,
        route: "/tasks",
        name: "tasks"
    },
    {
        Icon: TrophyIcon,
        route: "/trophy",
        name: "trophy"
    },
    {
        Icon: MediaIcon,
        route: "/media",
        name: "media"
    },
    {
        Icon: ProfileIcon,
        route: "/profile",
        name: "profile"
    },
]

const Footer: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();
    const segments = useSegments();
    const [colors, setColors] = useState<string[]>(Array(NAV_DATA.length).fill(theme.primary_opaque.color));

    const onNavClick = (route: string) => {
        router.push(route);
    }

    useEffect(() => {
        NAV_DATA.forEach((nav, i) => {
            if (segments.includes(nav.name)) {
                setColors(prev => {
                    prev = Array(NAV_DATA.length).fill(theme.primary_opaque.color);
                    prev[i] = theme.primary.color;
                    return [...prev];
                })
            }
        })
    }, [segments])

    return (
        <View style={{position: "absolute", bottom: 0, width: "100%", margin: "auto", height: 80, alignItems: "center", justifyContent: "center"}}>
            <View style={{
                width: "85%", height: 64, marginBottom: 16, backgroundColor: theme.nav.color, borderRadius: 8,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowOffset: {
                    width: 0,
                    height: 16,
                },
                shadowOpacity: 1,
                shadowRadius: 32,
                elevation: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                {NAV_DATA.map((data, i) => (
                    <TouchableOpacity key={data.route} onPress={() => onNavClick(data.route)}>
                        <data.Icon width={20} height={20} color={colors[i]} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Footer;