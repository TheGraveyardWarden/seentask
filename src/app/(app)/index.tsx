import { FC } from "react";
import { Heading } from "../../components/typo";
import { useThemeStore } from "../../stores";

const Home: FC = () => {
    const theme = useThemeStore(s => s.theme);
    return <Heading color={theme.background.text}>I'm Home</Heading>
}

export default Home;