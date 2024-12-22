import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => {
  return (
    <View style={styles.containner}>
      <View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/image/instagram_namee.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.IconContainner}>
        <TouchableOpacity style={styles.LoveCOntainner}>
          <View style={styles.LoveRedDot}></View>
          <AntDesign name="hearto" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoveCOntainner}>
          <View style={styles.messageCountShow}>
            <Text style={{ color: "white" }}>11</Text>
          </View>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 20,
  },
  IconContainner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  LoveRedDot: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  LoveCOntainner: {
    position: "relative",
  },
  messageCountShow: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 50,
    position: "absolute",
    top: -7,
    right: -5,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
