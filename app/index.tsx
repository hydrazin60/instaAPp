import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
export default function Page() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#064E3B",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
