import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Button,
  Modal,
} from "react-native";

const img = require("./assets/icon.png");
const onPressImg = require("./assets/on-press-image.png");

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, this is a simple React Native tutorial!
      </Text>
      <ScrollView>
        <Text style={styles.bigText}>Core Components</Text>
        <Text style={styles.midText}>
          In the React Native the main core component is the View element
          similar to div element in the web development. It is used for display
          any contents.
        </Text>
        <Text style={styles.midText}>
          To display any text into screen you should use the Text element.
        </Text>
        <Text style={styles.midText}>
          To display any image into screen you should use the Image element. As
          you can see below.
        </Text>
        <Image source={img} style={styles.midImage} />
        <Text style={styles.midText}>
          There are many other interesting elements in React Native, like the
          Button, TextInput, and others. In the end of this screen you can see a
          Button example!
        </Text>
        <Text style={styles.midText}>
          The Button element has events like onPress, onPressIn, onPressOut and
          onLongPress. See the image below that show when this events occurs.
        </Text>
        <Image source={onPressImg} style={styles.bigImage} />
      </ScrollView>
      <Button title="Press me" onPress={() => setModalVisible(true)} />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Modal</Text>
          <Text style={styles.midText}>
            This is a modal. You can close it by pressing the button below.
          </Text>
          <Button
            title="Close"
            color="red"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 60,
  },
  modal: {
    backgroundColor: "white",
    padding: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  bigText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  midText: {
    fontSize: 15,
    marginBottom: 10,
  },
  midImage: {
    height: 200,
    width: 200,
    margin: 20,
  },
  bigImage: {
    height: 200,
    width: 250,
    margin: 20,
  },
});
