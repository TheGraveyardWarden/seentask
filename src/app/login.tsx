import { FC, useState } from "react";
import { Image, View } from "react-native";
import { useAlertStore, useThemeStore, useUserStore } from "../stores";
import logo from "../../assets/logo-small.png";
import { Heading } from "../components/typo";
import { Input, InputPassword } from "../components/input";
import { Btn } from "../components/btn";
import { useRouter } from "expo-router";
import { UserApi } from "../api";
import { store_save } from "../storage";

const Login: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const setUser = useUserStore(s => s.setUser);
    const pushAlert = useAlertStore(s => s.pushAlert);
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onLogin = () => {
        if (!username || !password) return pushAlert("invalid fields!", "error");

        setLoading(true);
        UserApi.login(username, password).then(res => {
            setUser(res.data);
            store_save("token", res.headers["x-auth"]);
            router.replace("/");
        }).catch(err => {
            pushAlert(err.msg, "error");
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <View style={{backgroundColor: theme.background.color, flex: 1, alignItems: "center", justifyContent: "space-between"}}>
            <View></View>
            <Image source={logo} style={{width: 130, height: 120}} />
            <View style={{alignItems: "center", gap: 16, width: "100%"}}>
                <Heading color={theme.background.text} size={22}>ساخت حساب کاربری</Heading>
                <View style={{alignItems: "center", gap: 8, width: "80%"}} >
                    <Input label="نام کاربری" value={username} setValue={setUsername} />
                    <InputPassword label="رمزعبور" value={password} setValue={setPassword} />
                </View>
            </View>
            <View style={{flexDirection: "row", gap: 16, alignItems: "center", marginBottom: 8}} >
                <Btn loading={loading} label="بازگشت" pallete={{text: theme.primary.color, color: theme.nav.color}} onPress={() => router.back()} />
                <Btn loading={loading} onPress={onLogin} label="ورود" pallete={theme.primary} />
            </View>
        </View>
    )
}

export default Login;