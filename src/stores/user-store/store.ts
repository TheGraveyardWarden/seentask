import { create } from "zustand";
import { User } from "../../types/user";

interface State {
    user: User | null;
}

interface Action {
    setUser: (user: User) => void;
    authUser: () => void;
}

const useUserStore = create<State & Action>((set, get) => ({
    user: null,
    setUser: (user) => {
        set({user});
    },
    authUser: () => {
        set({user: null});
    }
}))

export default useUserStore;