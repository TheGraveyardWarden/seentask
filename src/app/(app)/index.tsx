import { FC } from "react";
import { Heading } from "../../components/typo";
import { useThemeStore, useUserStore } from "../../stores";
import { TouchableOpacity } from "react-native";
import { store_save } from "../../storage";

const Home: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const setUser = useUserStore(s => s.setUser);
    
    const logout = () => {
        store_save<string>("token", "");
        setUser(null);
    }

    return (
        <>
            <Heading color={theme.background.text}>I'm Home</Heading>
            <TouchableOpacity onPress={logout}><Heading color={theme.background.text}>Logout</Heading></TouchableOpacity>
        </>
    )
}

export default Home;