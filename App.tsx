import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./src/LoginScreen";
import { ThemeContext, ThemeProvider } from "styled-components/native";
import { useState } from "react";
import Routes from "./src/Router/Routes";
import { light } from "./src/styles/colors";
import {
  useFonts,
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
  Lora_400Regular_Italic,
  Lora_500Medium_Italic,
  Lora_600SemiBold_Italic,
  Lora_700Bold_Italic,
} from "@expo-google-fonts/lora";

export default function App() {
  const [theme, setTheme] = useState(false);

  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
    Lora_400Regular_Italic,
    Lora_500Medium_Italic,
    Lora_600SemiBold_Italic,
    Lora_700Bold_Italic,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
