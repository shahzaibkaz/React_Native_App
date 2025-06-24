import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

const LoginScreen = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name is : {Name}</Text>
      <Text style={styles.text}>Password is : {Password}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        placeholderTextColor="#ccc"
        onChangeText={(nameval) => setName(nameval)}
      />

      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Enter Your Password"
        placeholderTextColor="#ccc"
        onChangeText={(emailval) => setPassword(emailval)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login Here" color="#2196F3" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#2196F3",
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    width: "90%",
    marginTop: 30,
  },
  text: {
    width: "90%",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
});
