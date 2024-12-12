import { Redirect, Slot } from "expo-router";
import { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useThemeStore, useUserStore } from "../../stores";
import { ThemeVariant } from "../../types";
import { Heading } from "../../components/typo";
import Alerts from "../../alert";
import { Footer } from "../../footer";

const Layout: FC = () => {
    const active_theme = useThemeStore(s => s.active_theme);
    const theme = useThemeStore(s => s.theme);
    const authUser = useUserStore(s => s.authUser);
    const user = useUserStore(s => s.user);
    const loading = useUserStore(s => s.loading);

    useEffect(() => {
        authUser();
    }, []);

    if (loading) return <Heading color={theme.background.text}>Loading...</Heading>

    if (!user) return <Redirect href="/auth" />

    return <SafeAreaView style={{backgroundColor: theme.background.color, flex: 1}} >
        <StatusBar style={active_theme === ThemeVariant.DARK ? "light" : "dark"} />
        <Alerts/>
        <Slot/>
        <Footer/>
    </SafeAreaView>
}

export default Layout;