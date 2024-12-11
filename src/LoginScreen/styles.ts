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
  background-color: ${({ theme }: ITheme) => theme.colors.green};
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const Content = styled.View<ITheme>`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }: ITheme) => theme.colors.green};
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text<ITheme>`
  font-size: 35px;
  color: ${({ theme }: ITheme) => theme.colors.white};
  text-align: center;
  margin-bottom: 30px;
  font-family: ${({ theme }: ITheme) => theme.fonts.Lora_400Regular};
`;

export const AppName = styled.Text<ITheme>`
  font-size: 35px;
  color: ${({ theme }: ITheme) => theme.colors.white};
  text-align: center;
  margin-bottom: 10px;
  font-family: ${({ theme }: ITheme) => theme.fonts.Lora_400Regular};
`;

export const ForgotPasswordView = styled.View<ITheme>`
  align-items: flex-end;
  width: 100%;
  font-family: ${({ theme }: ITheme) => theme.fonts.Lora_400Regular};
`;

export const Text = styled.Text<ITheme>`
  font-size: 13px;
  color: ${({ theme }: ITheme) => theme.colors.white};
  font-family: ${({ theme }: ITheme) => theme.fonts.Lora_400Regular};
`;

export const ViewInput = styled.View`
  width: 80%;
`;

export const Input = styled(TextInput)<ITheme>`
  height: 55px;
  width: 100%;
  color: ${({ theme }: ITheme) => theme.colors.white};
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }: ITheme) => theme.colors.white};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LoginButton = styled.TouchableOpacity<ITheme>`
  height: 50px;
  width: 190px;
  background-color: ${({ theme }: ITheme) => theme.colors.white};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GreenText = styled.Text<ITheme>`
  color: ${({ theme }: ITheme) => theme.colors.green};
  font-size: 16px;
  font-family: ${({ theme }: ITheme) => theme.fonts.Lora_600SemiBold};
  margin-right: 20px;
`;

export const InputView = styled.View`
  flex-direction: row;
  position: relative;
`;

export const EyeIcon = styled(Ionicons)`
  color: #fff;
  font-size: 24px;
  position: absolute;
  right: 10px;
  top: 25%;
`;

export const EyeIconButton = styled.TouchableOpacity``;

export const ArrowRightIcon = styled(MaterialCommunityIcons)<ITheme>`
  color: ${({ theme }: ITheme) => theme.colors.green};
  font-size: 24px;
  margin-top: 5px;
`;