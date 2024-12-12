export type AlertType = "error" | "info";

export type AlertClickFn = () => void;

export interface Alert {
  type: AlertType;
  msg: string;
  id: number;
  onClick?: AlertClickFn;
}

export interface AlertInterval {
  [id: number]: NodeJS.Timeout | null;
}