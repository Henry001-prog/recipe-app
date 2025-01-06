import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";

interface ITheme {
  theme: {
    colors: {
      green: string;
      white: string;
    };

    fonts: {
      Lora_400Regular: string;
      Lora_500Medium: string;
      Lora_600SemiBold: string;
      Lora_700Bold: string;
      Lora_400Regular_Italic: string;
      Lora_500Medium_Italic: string;
      Lora_600SemiBold_Italic: string;
      Lora_700Bold_Italic: string;
    };
  };
}

interface IThemeAndIRef extends ITheme {
  ref: TextInputProps;
}

interface StyledInputProps extends TextInputProps {}

export const Container = styled.View<ITheme>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const Text = styled.Text``;