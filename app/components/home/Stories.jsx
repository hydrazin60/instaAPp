import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Users } from "../../assets/Data/userData";
const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((users, index) => (
          <Image source={{ uri: users.image }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const style = StyleSheet.create({
  
})
