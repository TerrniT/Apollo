import { Text, View } from "react-native";
import React from "react";

export default class RegistrationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Name" value={email} />
          <TextInput style={styles.input} placeholder="Name" value={email} />
          <Button title="Next" onPress={console.log("user has register")} />
        </View>
      </View>
    );
  }
}
