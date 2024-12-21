import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
});
