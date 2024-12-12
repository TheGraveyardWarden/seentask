import { Redirect, Slot } from "expo-router";
import { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useThemeStore, useUserStore } from "../../stores";
import { ThemeVariant } from "../../types";

const Layout: FC = () => {
    const active_theme = useThemeStore(s => s.active_theme);
    const theme = useThemeStore(s => s.theme);
    const authUser = useUserStore(s => s.authUser);
    const user = useUserStore(s => s.user);

    useEffect(() => {
        authUser();
    }, []);

    if (!user) return <Redirect href="/auth" />

    return <SafeAreaView style={{backgroundColor: theme.background.color, flex: 1}} >
        <StatusBar style={active_theme === ThemeVariant.DARK ? "light" : "dark"} />
        <Slot/>
    </SafeAreaView>
}

export default Layout;