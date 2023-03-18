import { View, TextInput } from "react-native";

export default function RegistrationScreen() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Регистрация</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogin}
        value={login}
        placeholder="Логин"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Адрес электронной почты"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Пароль"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: " #E8E8E8",
    width: 343,
    height: 50,
  },
});
