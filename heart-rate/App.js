import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [age, setAge] = useState("");
  const [limits, setLimits] = useState("");

  const calculate = () => {
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 120) {
      setLimits("Please enter a valid age");
      return;
    }

    const lower = (220 - age) * 0.65;
    const upper = (220 - age) * 0.85;
    setLimits(`${lower.toFixed(0)} - ${upper.toFixed(0)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
        placeholder="Enter your age"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title="Calculate" onPress={calculate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
  },
});
