import { createContext } from "react";
import { light, dark } from "../styles/colors";

interface ITheme {
    theme: typeof light;
    setTheme: (value: boolean) => void;
}

export const ThemeContext = createContext({} as ITheme);