import { Slot } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "../../stores";
import { ThemeVariant } from "../../types";
import Alerts from "../../alert";

const Layout: FC = () => {
    const active_theme = useThemeStore(s => s.active_theme);
    const theme = useThemeStore(s => s.theme);

    return <SafeAreaView style={{backgroundColor: theme.background.color, flex: 1}} >
        <StatusBar style={active_theme === ThemeVariant.DARK ? "light" : "dark"} />
        <Alerts/>
        <Slot/>
    </SafeAreaView>
}

export default Layout;