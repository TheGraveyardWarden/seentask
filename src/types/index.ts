export interface Color {
    text: string;
    color: string;
}

export interface Theme {
    background: Color;
    overlay: Color;
    primary: Color;
    primary_opaque: Color;
    secondary: Color;
    nav: Color;
    icon: Color;
    info: Color;
    success: Color;
    error: Color;
}

export enum ThemeVariant {
    LIGHT = 0,
    DARK,
}

export type FontFamily = "Sans-Bold" | "Sans-Regular";

export interface ObjectID {
    $oid: string;
}

export type Updater<T> = T | ((prev: T) => T);
export type UpdateFn<T> = (v: Updater<T>) => void;