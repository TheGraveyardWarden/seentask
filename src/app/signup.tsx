import { FC, useState } from "react";
import { Image, View } from "react-native";
import { useThemeStore } from "../stores";
import logo from "../../assets/logo-small.png";
import { Heading } from "../components/typo";
import { Input, InputPassword } from "../components/input";
import { Btn } from "../components/btn";
import { useRouter } from "expo-router";

const Signup: FC = () => {
    const theme = useThemeStore(s => s.theme);
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <View style={{backgroundColor: theme.background.color, flex: 1, alignItems: "center", justifyContent: "space-between"}}>
            <View></View>
            <Image source={logo} style={{width: 130, height: 120}} />
            <View style={{alignItems: "center", gap: 16, width: "100%"}}>
                <Heading color={theme.background.text} size={22}>ساخت حساب کاربری</Heading>
                <View style={{alignItems: "center", gap: 8, width: "80%"}} >
                    <Input label="نام کاربری" value={username} setValue={setUsername} />
                    <InputPassword label="رمزعبور" value={password} setValue={setPassword} />
                    <InputPassword label="تکرار رمز عبور" value={confirmPassword} setValue={setConfirmPassword} />
                </View>
            </View>
            <View style={{flexDirection: "row", gap: 16, alignItems: "center"}} >
                <Btn label="بازگشت" pallete={{text: theme.primary.color, color: theme.nav.color}} onPress={() => router.back()} />
                <Btn label="ثبت نام" pallete={theme.primary} />
            </View>
        </View>
    )
}

export default Signup;