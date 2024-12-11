import { create } from "zustand";
import { Theme, ThemeVariant } from "../../types";
import { store_get, store_save } from "../../storage";

const THEMES: Theme[] = [
    // LIGHT
    {
        background: {
            text: "black",
            color: "#EFF0FA"
        },
        overlay: {
            text: "black",
            color: "#FDFEFE"
        },
        primary: {
            text: "white",
            color: "#5F33E1"
        },
        primary_opaque: {
            text: "white",
            color: "#9A80E8"
        },
        secondary: {
            text: "white",
            color: "#F376B7"
        },
        nav: {
            text: "black",
            color: "#EBE4FF"
        },
        icon: {
            text: "white",
            color: "#BFBFBF"
        },
        info: {
            text: "white",
            color: "#FF8D4F"
        },
        success: {
            text: "white",
            color: "#09D2AD"
        },
        error: {
            text: "white",
            color: "#F376B7"
        },
    },
    // DARK
    {
        background: {
            text: "white",
            color: "black"
        },
        overlay: {
            text: "black",
            color: "#FDFEFE"
        },
        primary: {
            text: "white",
            color: "#5F33E1"
        },
        primary_opaque: {
            text: "white",
            color: "#9A80E8"
        },
        secondary: {
            text: "white",
            color: "#F376B7"
        },
        nav: {
            text: "black",
            color: "#EBE4FF"
        },
        icon: {
            text: "white",
            color: "#BFBFBF"
        },
        info: {
            text: "white",
            color: "#FF8D4F"
        },
        success: {
            text: "white",
            color: "#09D2AD"
        },
        error: {
            text: "white",
            color: "#F376B7"
        },
    }
];

interface State {
    active_theme: ThemeVariant;
    theme: Theme;
}

interface Action {
    setTheme: (theme_var: ThemeVariant) => void;
    swapTheme: () => void;
    loadTheme: () => void;
}

const useThemeStore = create<State & Action>((set, get) => ({
    active_theme: ThemeVariant.LIGHT,
    theme: THEMES[ThemeVariant.LIGHT],

    setTheme: (theme_var) => {
        store_save("theme", theme_var).then(() => {
            set({ theme: THEMES[theme_var], active_theme: theme_var });
        });
    },
    swapTheme: () => {
        if (get().active_theme === ThemeVariant.DARK) {
            get().setTheme(ThemeVariant.LIGHT);
        } else {
            get().setTheme(ThemeVariant.DARK);
        }
    },
    loadTheme: () => {
        store_get<ThemeVariant>("theme").then(theme_var => {
            if (theme_var) {
                get().setTheme(theme_var);
            } else {
                get().setTheme(ThemeVariant.LIGHT);
            }
        })
    }
}))

export default useThemeStore;