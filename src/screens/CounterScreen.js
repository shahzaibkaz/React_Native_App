import { View, Text, StyleSheet } from "react-native";
import Button from "../components/button";
import { useState } from "react";
import { ImageBackground } from "react-native-web";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const countValue = 1000;
  const AddFunction = () => {
    setCount(count + countValue);
  };
  const SubtractFunction = () => {
    if (count == 0) {
      alert(
        "You can't Subtract Value Due to Counter Value is " +
          count +
          " Answer well not be in negetive"
      );
      return;
    }
    setCount(count - countValue);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://cdn.pixabay.com/photo/2022/09/14/18/32/cafe-7454951_960_720.jpg",
      }}
    >
      <View style={styles.itemsContainer}>
        <Button title="Add" onPress={AddFunction} />
        <Text style={[styles.text, { color: count == 0 ? "red" : "green" }]}>
          {count}
        </Text>
        <Button title="Minus" onPress={SubtractFunction} />
      </View>
    </ImageBackground>
  );
};

export default CounterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(15, 15, 15, 0.49)",
    justifyContent: "center",
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    alignItems: "center",
    gap: 10,
    height: 300,
    paddingHorizontal: 80,
  },
  text: {
    fontSize: 26,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 13,
    padding: 10,
  },
});
