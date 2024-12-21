import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export default function Header() {
  return (
    <View style={styles.containner}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/image/instagram_namee.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.itemContainner}>
        <TouchableOpacity style={styles.logoContainner}>
          <View style={styles.LoveNotificationCount}></View>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoContainner}>
          <View style={styles.MessageLogoContainner}>
            <Text style={{ color: "white" }}>11</Text>
          </View>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={24}
            color="black"
            backgroundColor="white"
            style={{ borderRadius: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containner: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 110,
    height: 25,
    color: "white",
  },
  itemContainner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  logoContainner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  LoveNotificationCount: {
    top: 1,
    right: -3,
    position: "absolute",
    backgroundColor: "red",
    borderRadius: 50,
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  MessageLogoContainner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 15,
    width: 20,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: -5,
    right: -6,
    zIndex: 1,
  },
});
