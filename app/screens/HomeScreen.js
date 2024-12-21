import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/home/Header";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.containner}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
});
