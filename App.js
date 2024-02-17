import { View, StyleSheet, ScrollView, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.bigText}>
          Hello, this is a simple React Native tutorial!
        </Text>
        <Text style={styles.midText}>
          In the Reac Native the main core component is the View element similar
          to div element in the web development.
        </Text>
        <Text style={styles.midText}>
          To display any text into screen you should use the Text element.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 60,
  },
  bigText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  midText: {
    fontSize: 15,
    marginTop: 20,
  },
});
