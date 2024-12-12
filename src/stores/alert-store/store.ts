import { create } from "zustand";
import { Alert, AlertClickFn, AlertInterval, AlertType } from "../../types/alert";

interface State {
  alerts: Alert[];
  baseId: number;
  intervals: AlertInterval;
}

interface Action {
  pushAlert: (msg: string, type?: AlertType, onClick?: AlertClickFn) => void;
  rmAlert: (id: number) => void;
  getId: () => number;
}

const TIMEOUT = 5000;

const useAlertStore = create<State & Action>((set, get) => ({
  alerts: [],
  baseId: 10,
  intervals: {},

  pushAlert: (msg, type = "info", onClick) => {
    let id = get().getId();
    let interval = setTimeout(() => get().rmAlert(id), TIMEOUT);

    set((state) => ({
      alerts: [{ msg, type, id, onClick }, ...state.alerts],
      intervals: { ...state.intervals, [id]: interval },
    }));
  },

  rmAlert: (id) => {
    let t = get().intervals[id];
    if (t) clearTimeout(t);

    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== id),
      intervals: { ...state.intervals, [id]: null },
    }));
  },

  getId: () => {
    let res = get().baseId;
    set({ baseId: res + 1 });
    return res;
  },
}));

export default useAlertStore;