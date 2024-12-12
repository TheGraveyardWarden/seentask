import { FC } from "react";
import { useAlertStore, useThemeStore } from "../stores";
import { AlertClickFn } from "../types/alert";
import { TouchableOpacity, View } from "react-native";
import { Heading } from "../components/typo";

const Alerts: FC = () => {
  const theme = useThemeStore((s) => s.theme);

  const { alerts, rmAlert } = useAlertStore();

  const onClick = (id: number, cb?: AlertClickFn): void => {
    rmAlert(id);
    if (cb) cb();
  };

  return (
    <View style={{flexDirection: "column", position: "absolute", top: 40, right: 20, width: "80%", gap: 10, zIndex: 99999}}>
        {alerts.map(alert => (
            <TouchableOpacity onPress={() => onClick(alert.id, alert.onClick)} style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.overlay.color,
                padding: 5,
                borderRadius: 8
            }} key={alert.id}>
                <Heading color={alert.type === "error" ? theme.error.color : theme.primary.color} >{alert.msg}</Heading>
            </TouchableOpacity>
        ))}
    </View>
  );
};

export default Alerts;