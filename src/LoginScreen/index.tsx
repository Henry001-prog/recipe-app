import {
  Container,
  Title,
  Text,
  Input,
  LoginButton,
  GreenText,
  Content,
  AppName,
  ForgotPasswordView,
} from "./styles";
import { useTheme } from "styled-components/native";

export function LoginScreen() {
  const theme = useTheme();

  return (
    <Container>
      <AppName>RecipeApp</AppName>
      <Content>
        <Title>Encontre Seu Próximo Prato Favorito</Title>

        <Input placeholder="Email" placeholderTextColor={theme.colors.white} />
        <Input
          placeholder="Password"
          placeholderTextColor={theme.colors.white}
          secureTextEntry
        />

        <ForgotPasswordView>
          <Text>Esqueceu a senha?</Text>
        </ForgotPasswordView>

        <LoginButton>
          <GreenText>Explore o app</GreenText>
        </LoginButton>
      </Content>
      <Text>Não tem conta? Registre-se</Text>
    </Container>
  );
}
