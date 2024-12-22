import { View, Text } from "react-native";
import React from "react";
import Header from "./components/home/Header";
import Stories from "./components/home/Stories";
const index = () => {
  return (
    <View style={{ padding: 15 }}>
      <Header />
      <Stories/>
    </View>
  );
};

export default index;
