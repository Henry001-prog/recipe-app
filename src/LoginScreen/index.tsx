import { useRef, useState } from "react";
import { TextInputProps, TextInput } from "react-native";
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
  ViewInput,
  EyeIcon,
  InputView,
  ArrowRightIcon,
  EyeIconButton,
} from "./styles";
import { useTheme } from "styled-components/native";

export function LoginScreen() {
  const [securityField, setSecurityField] = useState(true);

  const theme = useTheme();

  const input2Ref = useRef<TextInputProps & TextInput>(null);

  return (
    <Container>
      <AppName>RecipeApp</AppName>
      <Content>
        <Title>Encontre Seu Próximo Prato Favorito</Title>

        <Input
          placeholder="Email"
          placeholderTextColor={theme.colors.white}
          returnKeyType="next"
          onSubmitEditing={() => input2Ref.current!.focus()}
        />

        <InputView>
          <Input
            placeholder="Password"
            placeholderTextColor={theme.colors.white}
            secureTextEntry={securityField}
            returnKeyType="next"
            ref={input2Ref}
          />
          <EyeIconButton onPress={() => setSecurityField(!securityField)}>
            <EyeIcon name={securityField ? "eye-off-outline" : "eye-outline"} />
          </EyeIconButton>
        </InputView>

        <ForgotPasswordView>
          <Text>Esqueceu a senha?</Text>
        </ForgotPasswordView>

        <LoginButton>
          <GreenText>Explore o app</GreenText>
          <ArrowRightIcon name="arrow-right-thin" />
        </LoginButton>
      </Content>
      <Text>Não tem conta? Registre-se</Text>
    </Container>
  );
}
