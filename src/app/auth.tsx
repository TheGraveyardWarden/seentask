import { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../stores";
import logo from "../../assets/logo-small.png";
import girl from "../../assets/auth-girl.png";
import { Heading, Text } from "../components/typo";
import { Link, useRouter } from "expo-router";

const Auth: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();

    const onLogin = () => {
        router.push("/login");
    }

    return (
        <View style={{flex: 1, backgroundColor: theme.background.color, flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
            <Image source={logo} style={{marginTop: 51}} />
            <View style={{flexDirection: "column", alignItems: "center", width: "100%", marginBottom: 8}}>
                <Image source={girl} style={{marginBottom: -25, zIndex: 10}} />
                <View style={{height: 280, width: "100%", borderRadius: 16, backgroundColor: theme.primary.color}} >
                    <Heading color={theme.primary.text} styles={{textAlign: "center", marginTop: 64, marginBottom: 48}} size={22}>خوش آمدید</Heading>
                    <TouchableOpacity onPress={onLogin} style={{marginHorizontal: 12, backgroundColor: theme.background.color, height: 48, borderRadius: 8, alignItems: "center", justifyContent: "center", marginBottom: 17}} >
                        <Heading color={theme.background.text} styles={{textAlign: "center"}}>ورود</Heading>
                    </TouchableOpacity>
                    <View style={{gap: 6, flexDirection: "row", alignItems: "center", justifyContent: "center"}} >
                        <Link href={"/signup"}><Heading color={theme.primary.text} size={14}>ثبت نام</Heading></Link>
                        <Text color={theme.primary.text} size={14} styles={{textAlign: "center"}}>ایا حساب کاربری ندارید؟</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Auth;