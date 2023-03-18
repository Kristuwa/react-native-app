import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import image from "./assets/register-bg.jpg";
// import RegistrationScreen from "./screens/RegistrationScreen.js";

export default function App() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.form}>
          <Text style={styles.title}>Регистрация</Text>
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
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 1.17,
    letterSpacing: "0.01em",
    marginBottom: 33,
    textAlign: "center",
  },

  form: {
    width: "100%",
    paddingTop: 92,
    paddingBottom: 66,
    marginTop: "auto",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  input: {
    borderWidth: 1,
    padding: 16,
    borderColor: "#e8e8e8",
    backgroundColor: "#F6F6F6",
    height: 50,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    color: "#212121",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 16,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.19,
    color: "#ffffff",
  },
});
