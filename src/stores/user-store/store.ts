import { create } from "zustand";
import { User } from "../../types/user";
import { UserApi } from "../../api";

interface State {
    user: User | null;
    loading: boolean;
}

interface Action {
    setUser: (user: User | null) => void;
    authUser: () => void;
}

const useUserStore = create<State & Action>((set, get) => ({
    loading: true,
    user: null,
    setUser: (user) => {
        set({user});
    },
    authUser: () => {
        UserApi.authenticate().then(user => {
            set({user});
        }).catch(() => {
            set({user: null});
        }).finally(() => {
            set({loading: false});
        })
    }
}))

export default useUserStore;