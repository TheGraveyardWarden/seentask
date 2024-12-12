import "react-native-gesture-handler";
import React, { type FunctionComponent, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useThemeStore } from "./src/stores";
import Layout from "./src/app/_layout";

/**
 * Important note: It is recommended
 * to call this in global scope without awaiting,
 * rather than inside React components or hooks,
 * because otherwise this might be called too late,
 * when the splash screen is already hidden.
 */
// eslint-disable-next-line
SplashScreen.preventAutoHideAsync();

const App: FunctionComponent = () => {
    const loadTheme = useThemeStore(s => s.loadTheme);

    useEffect(() => {
      loadTheme();
    }, []);

    const [fontsLoaded, fontError] = useFonts({
        "Sans-Regular": require("./assets/fonts/IRANYekanXFaNum-Regular.ttf"),
        "Sans-Bold": require("./assets/fonts/IRANYekanXFaNum-Bold.ttf"),
    });

    useEffect(() => {
        const hideSplashScreen = async (): Promise<void> => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        };

        hideSplashScreen().catch((error) => {
            console.error(error);
        });
    }, [fontsLoaded]);

    if (!fontsLoaded && fontError === null) return null;

    return (
        <Layout/>
    );
};

export default App;