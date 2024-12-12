import { UpdateFn } from "../../../types";

export interface ModalProps {
    visible: boolean;
    setVisible: UpdateFn<boolean>;
}